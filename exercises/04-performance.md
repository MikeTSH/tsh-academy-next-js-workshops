# 05 Performacne

## 1. [PERF-1] Optymalizacja fontu

W tym zadaniu chcemy sprawić, by font był pobierany z tego samego
miejsca co kod naszej aplikacji, a przeglądarka zaczynała go ściągać
tak szybko jak to tylko możliwe.

1. Z pliku `_document.tsx` usuń linię odpowiedzialną za 
pobieranie fontu z zewnętrznych serwerów Google Fonts.

2. Skonfiguruj bibliotekę komponentów MUI, by korzystała z lokalnego fontu.
W tym celu w pliku `theme.ts` nadpisz style dla `MuiCssBaseline` 
wpisując w pole `styleOverrides` następujący string:

    ```
       @font-face {
           font-family: "Roboto";
           src: url(/fonts/Roboto.woff2) format("woff2 supports variations"),
                url(/fonts/Roboto.woff2) format("woff2-variations");
           font-weight: 100 900;
           font-display: swap;
       }
    ```

3. Zoptymalizuj pobieranie fontu poprzez podpowiedzenie przeglądarce, by 
zaczęła go pobierać jeszcze zanim dowie się o jego istnieniu 
z pliku `theme.ts`. Wróc do pliku `_document.tsx` i w sekcji `Head`
dopisz nastepujący *resource hint*:

    ```
    <link 
        rel="preload" 
        href="/fonts/Roboto.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="true" 
    />
    ```
   
## 2. [PERF-2] Optymalizacja obrazków

Wszystkie grafiki w naszej aplikacji korzystają z wspólnego komponentu `Image`. 
Niestety, aktualnie ten komponent korzysta bezpośrednio z tradycyjnego 
znacznika `img`. W ramach tego zadania spróbujemy skorzystać z lepszego rozwiązania. 

1. Odszukaj plik `Image.tsx`. W jego wnętrzu znajduje się komponent, który zawiera
dwie różne implementacje wyświetlania grafiki. Zakomentuj tę wykorzystująca `img`,
a odkomentuj tę która korzysta z komponentu `next/image`. Po tej operacji 
twoja aplikacja może chwilowo przestać działać.

2. Zajrzyj do pliku z konfiguracją nexta `next.config.js` i w `config.images` ustaw:
   * w `domains` adres z którego pochodzą zdjęcia (fakestoreapi.com),
   * w `deviceSizes` obsługiwane przez aplikację breakpointy (768, 1024, 1440),
   * w `imageSizes` wykorzystywane w aplikacji rozmiary grafik (503, 768, 888).
   
   Pomocna może tu być [dokumentacja](https://nextjs.org/docs/api-reference/next/image).

3. Uruchom ponownie serwer Nexta w terminalu. Sprawdź za pomocą inspektora przeglądarki 
jak wygląda teraz wyrenderowany znacznik `img` i co znajduje się w atrybucie `srcset`.

## 3. [PERF-3] Code splitting

W headerze naszej aplikacji korzystamy z modala logowania. Nie jest to jednak
coś niezbędnego podczas startu naszej aplikacji. Chcemy więc, by logika tego
okna pobierała się dopiero, kiedy użytkownik będzie chciał się zalogować.

1. W `Header.tsx` usuń statyczny import componentu LoginModal.

2. W tym samym pliku dodaj dynamiczne importowanie komponentu modala. Możesz 
skorzystać z poniższego wzorcowego kodu. Pamiętaj, by zmienić w nim: 
   * adres importowanego modułu na ścieżkę do `LoginModal.tsx`,
   * typ propsów na `LoginModalProps`,
   * pole wyciągane z zaimportowanego modułu (w callbacku `then`),
   * nazwę tworzonej zmiennej na `LoginModal`.

   ```
   import dynamic from 'next/dynamic';

   const DynamicComponent = dynamic<ComponentProps>(() => {
      return import('../component/Component').then((module) => module.Component);
   });
   ```
   
3. W kodzie komponentu `Header` popraw sposób wyświetlania modalu tak, by 
komponent LoginModal nie był renderowany, dopóki nie jest potrzebny.

   ```
   {isLoginModalOpen && <LoginModal isOpen={isLoginModalOpen} ...
   ```

4. Na koniec sprawdź czy wprowadzone zmiany działają. Otwórz devtoolsy i zobacz na
zakładce Network czy przy otwieraniu modala ładowany jest dodatkowy plik JS.
