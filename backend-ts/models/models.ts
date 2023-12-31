export interface IProduct {
  _id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface ServerResponse<T> {
  products: T[];
}

export interface IRating {
  value: number;
  text: string;
}
