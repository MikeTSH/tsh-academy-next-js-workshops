###### Zadanie 1 - Search

1. Dodaj odpowiedni plik `tsx` pod ścieżką `search/[category]`.
2. Zadeklaruj komponent reaktowy na swojej stronie który będzie `default export`em (interfejs `NextPage` może się przydać).
3. Wykorzystaj komponent `Search` i wyrenderuj go w stworzonym komponencie, właściwości przyjmowane przez komponent pokrywać będą się z komponentem `Search`.
4. Zdefiniuj i exportuj metodę asynchroniczną `getServerSideProps`, może przydać się interfejs `GetServerSidePropsContext`.
5. Użyj metod `searchUrlToCriteria`, `getProducts` i `getCategories` do pobrania potrzebnych danych, które zwrócisz w `getServerSideProps`, jako parametr `getServerSideProps` otrzymuje query które przekażesz do `searchUrlToCriteria`.
6. Zwracane przez `getServerSideProps` parametry przekazywane są do `SearchPage` i tam powinny zostać przekazane do komponentu `Search`.

###### Zadanie 2 - Product details cd.

1. Na istniejącej stronie `product/[id]` dodaj i exportuj metodę `getStaticPaths`.
2. Powinna ona zwracać obiekt z właściwością paths której porządaną wartość dostaniesz z metody `getProductsPaths`. Możesz ustawić `fallback: false`.
3. Stwórz metodę i eksportuj `getStaticProps`, przyda się do tego `GetStaticPropsContext`. Jako props zwracany z `getStaticPaths` jest obiekt zawierający pole ID.
4. Przenieś logikę pobierania produktów i produktów powiązanych do `getStaticProps`, metoda jest asnychroniczna.
5. Obsłuż zwracane w `getStatiProps` właściwości w komponencie, usuń użycia hooków.
6. W przypadku braku produktu zamiast `push`a, zwróć w `getStaticProps` obiekt z polem `notFound` ustawionym na `true`.
