import { toast } from "react-toastify";
import { Product } from "../types";

type CardProductProps = {
  product: Product;
  onAddToCart: (product: Product) => void;
};

export default function CardProduct({
  product,
  onAddToCart,
}: CardProductProps) {
  return (
    <div
      key={product._id}
      className=" mb-10 w-64 md:w-50 sm:w-42 overflow-hidden rounded-md bg-white shadow-md"
    >
      <img
        src="/img/chipsdepapa.png"
        alt={product.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">Precio: ${product.price}</p>
        <button
          className="mt-2 rounded bg-turquesa-profundo px-4 py-2 text-white hover:bg-[#167d77]"
          onClick={() => {
            toast.success(`Product ${product.name} to POS`);
            onAddToCart(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
