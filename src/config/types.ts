export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type Cart = Record<string, number>;
