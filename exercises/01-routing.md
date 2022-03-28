###### Zadanie 1. - Product details

1. Dodaj odpowiedni plik `tsx` pod ścieżką `product/[id]`
2. Zadeklaruj komponent reaktowy na swojej stronie który będzie `default export`em (interfejs `NextPage` może się przydać).
3. Wykorzystaj komponent `ProductDetails` i wyrenderuj go w stworzonym komponencie
4. Użyj metod `getProduct` i `getRelatedProducts` do pobrania potrzebnych dla `ProductDetails` danych
5. Id produktu znajdziesz w `query` do którego dostęp uzyskasz poprzez hook `useRouter`.
6. Pobieranie powinno odbywać się w `useEffect` i pobrane dane powinny być przechowane w stanie.
7. Jeśli produkt o podanym ID nie istnieje powinno nastąpić przekierowanie na stronę 404, wykorzystaj metodę `push` z hooka `useRouter`.
