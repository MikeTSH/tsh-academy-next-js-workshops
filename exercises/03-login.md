# Logowanie

## 1. Bootstraping logowania

1. Zainstaluj `next-auth`
2. Stwórz api route: `pages/api/auth/[...nextauth].ts`
   1. [wyeksportuj NextAuth pod tym API route](https://next-auth.js.org/getting-started/example#add-api-route)
3. Skonfiguruj [CredentialsProvider](https://next-auth.js.org/providers/credentials#example)
   1. skonfiguruj pola wejściowe tak aby od użytkownika wymagane było `username` + `password`
   2. skorzystaj z `lib/postLogin.ts`
   3. metoda `authorize` powinna zwracać obiekt z `apiToken`
4. Skonfiguruj [callback JWT](https://next-auth.js.org/configuration/callbacks#jwt-callback) tak aby przepisywał `apiToken` z `user` do tokena klienckiego
5. Skonfiguruj [callback session](https://next-auth.js.org/configuration/callbacks#session-callback) tak aby dopisał do sesji `apiToken` zakodowany w tokenie klienckim
6. Dodaj [SessionProvider](https://next-auth.js.org/getting-started/example#configure-shared-session-state) w `_app.tsx`
7. Podepnij metodę `signIn` w `Header.tsx` do akcji logowania
8. Upewnij się że `apiToken` trafia do przeglądarki
    * przykładowy użytkownik na którego możesz się zalogować: `johnd`
    * hasło to dowolny niepusty ciąg (nie jest walidowane w API dla uproszczenia)
    * na podstronie `/profile` możesz przedebugować stan sesji aktualnie zalogowanego użytkownika

## 2. Strona profilu użytkownika w CSR + menu użytkownika

1. Wykorzystaj istniejący plik `pages/profile.tsx` jako podstawy do stworzenia strony profilowej
2. `status === 'unauthenticated'` (pochodzący z `useSession`) powinien kierować do strony logowania
3. Pobierz dane użytkownika wykorzystując `lib/getMe.ts` oraz `apiToken` z danych sesji
4. Użyj komponentu `Profile.tsx` do wyrenderowania danych użytkownika
5. Zaimplementuj menu użytkownika w `Header.tsx`
   1. renderuj w menu pozycje "Login" lub "Profile" i "Log out" zależnie od statusu sesji
   2. "Log out" zepnij z metodą `signOut`
   3. `signOut` umożliwia przekazanie `callbackUrl`. Dobrym pomysłem jest przekierować po wylogowaniu na stronę główną

## 3. Strona profilu użytkownika w SSR

1. Pozbądź się wszelkiej logiki z komponentu podstrony `pages/profile.tsx` poza renderowaniem komponentu `Profile`
2. Wykorzystaj `getServerSideProps` tak aby dostarczył dane użytkownika poprzez propsy
   1. użyj `getSession(context)` (gdzie `context` jest argumentem funkcji `getServerSizeProps`) aby wyciągnąć status oraz dane sesji
   2. w przypadku anonimowego użytkownika, możesz przekierować go do strony logowania: 
   ```TypeScript
   return { 
     redirect: {
       destination: `/api/auth/signin?callbackUrl=${encodeURIComponent(req.url!)}`,
       permanent: false, 
     },  
   };
   ```
   3. użyj funkcji `getMe` aby pobrać dane użytkownika, lecz tym razem po stronie serwera