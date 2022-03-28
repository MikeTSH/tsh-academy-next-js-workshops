export const routing = {
  homepage: '/',
  search: (category?: string) => `/search/${category}`,
  product: (id: number) => `/product/${id}`,
};
