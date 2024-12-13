export type Order = Pick<Product, "_id" | "name" | "price"> & {
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
