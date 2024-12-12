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
      className="overflow-hidden rounded-md bg-white shadow-md"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">Price: ${product.price}</p>
        <button
          className="mt-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          onClick={() => {
            toast.success(`Product ${product.name} to POS`);
          }}
        >
          Add to
        </button>
      </div>
    </div>
  );
}
