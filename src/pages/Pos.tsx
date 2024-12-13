import { useState } from "react";
import { Order, Product } from "../types";
import SideBar from "../components/SideBar";
import CardProduct from "../components/CardProduct";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useFetchProduct from "../hooks/useFetchProduct";

export const Pos = () => {
  const { products, loading } = useFetchProduct();
  const [orden, setOrden] = useState<Order[]>([]);

  if (loading) {
    return <p>Loading recipes...</p>;
  }

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get<Product[]>('/api/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  const onAddToCart = (product: Product) => {
    const itemExist = orden.find((item) => item._id === product._id);
    if (itemExist) {
      const newOrder = orden.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setOrden(newOrder);
    } else {
      setOrden([...orden, { ...product, quantity: 1 }]);
    }
  };

  const onRemoveFromCart = (_id: string) => {
    const removeItem = orden.filter((item) => item._id !== _id);
    toast.error(`Product deleting`);
    setOrden(removeItem);
  };

  return (
    <div className="flex max-md:flex-col">
      <div className="flex-1 p-6">
        <div className="flex justify-between">
          <h1 className="mb-6 text-2xl font-bold">Products</h1>
          <div>
            <Link
              to={"/users"}
              className="mx-4 rounded-3xl bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Usuarios
            </Link>
            <Link
              to={"/products"}
              className="mx-4 rounded-3xl bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Productos
            </Link>
            <Link
              to={"/stadistics"}
              className="mx-4 rounded-3xl bg-green-500 px-4 py-2 text-white hover:bg-green-600"
            >
              Estadísticas
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <CardProduct
              key={product._id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
      <SideBar
        orden={orden}
        onRemoveFromCart={onRemoveFromCart}
        setOrden={setOrden}
      />
    </div>
  );
};
