export const makeCategoriesURL = `${process.env.NEXT_PUBLIC_API_URL}products/categories`;

export const getCategories = async (): Promise<Array<string>> => {
  return fetch(makeCategoriesURL).then((res) => res.json());
};
