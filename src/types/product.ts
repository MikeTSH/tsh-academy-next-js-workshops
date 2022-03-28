export type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string;
};

export type Rating = {
  rate: number;
  count: number;
};
