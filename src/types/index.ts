export type Order = Product & {
  quantity: number;
};
export type Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
};

export type User = {
  _id: string;
  name: string;
  lastname: string;
  phone_number: string;
  email: string;
  address: string;
};
