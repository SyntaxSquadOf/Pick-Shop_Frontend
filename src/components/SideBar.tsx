import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { Order } from "../types";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import useFetchUsers from "../hooks/useFetchUsers";
import apiClient from "../utils/api";

type SideBarProps = {
  orden: Order[];
  onRemoveFromCart: (id: string) => void;
  setOrden: React.Dispatch<React.SetStateAction<Order[]>>;
};

export default function SideBar({
  orden,
  onRemoveFromCart,
  setOrden,
}: SideBarProps) {
  const { users, loading } = useFetchUsers();

  const isValidOrden = useMemo(() => {
    return orden.length > 0;
  }, [orden]);

  const total = useMemo(() => {
    return orden.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [orden]);

  if (loading) {
    return <p>Loading Users...</p>;
  }
  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    console.log(event.target.value);
  };
  const MySwal = withReactContent(Swal);

  const handleCancelOrder = () => {
    MySwal.fire({
      title: "¿Estás seguro de cancelar la orden?",
      text: "No podrás recuperar esta información",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire("Cancelado", "La orden ha sido cancelada", "success");
        setOrden([]);
      }
    });
  };

  const handleSell = async () => {
    try {
      // const response = await apiClient.post("/api/cart/", {
      //   products: orden,
      //   total,
      // });

      // console.log("Response:", response.data);
      console.log("Orden:", orden);
    } catch (error) {
      console.error("Error al vender:", error);
    }

    let timerInterval: number;
    MySwal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = MySwal.getPopup()?.querySelector("b");
        if (timer) {
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        }
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    });
    setOrden([]);
  };

  return (
    <div className="flex min-h-screen w-auto flex-col bg-grafito-suave p-6 text-white max-md:h-full lg:w-[38rem]">
      <div>
        <h2 className="mb-6 text-2xl font-bold">Sistema POS</h2>
      </div>
      <div></div>
      <div className="mb-5 flex">
        <p className="pt-1">Clientes:</p>
        <select
          id="client"
          className="mx-2 flex-1 rounded-xl bg-slate-400 p-1 h-8"
          onChange={handleFilter}
        >
          <option value="">Seleccionar Cliente</option>
          <option value="cliente-Final">Consumidor Final</option>
          {users.map((customer) => (
            <option key={customer._id} value={customer.name}>
              {customer.name}
            </option>
          ))}
        </select>
        <button className="bg-turquesa-profundo rounded-xl px-3 font-semibold py-1 hover:bg-[#167d77]">+</button>
      </div>
      <div className="h-full">
        <div className="mt-5 space-y-3">
          <h3 className="text-center font-semibold uppercase">Orden</h3>
          {isValidOrden ? (
            orden.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-t border-gray-300 py-5 last-of-type:border-b"
              >
                <div className="flex items-center">
                  <div className="">
                    <p className="text-lg">
                      {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className="font-black">
                      Cantidad = {item.quantity} -{" "}
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
                <button
                  role="img"
                  aria-label="delete"
                  onClick={() => onRemoveFromCart(item._id)}
                >
                  🗑️
                </button>
                {/* opcion 2 para eliminar un item del pedido estilado 
              <button
                className="bg-red-600 h-6 w-6 rounded-full text-white font-black"
                onClick={() => removeItem(item.id)}
              >
                X
              </button> */}
                {/* <p>
                {item.name} x {item.quantity}
              </p>
              <p>{formatCurrency(item.price * item.quantity)}</p> */}
              </div>
            ))
          ) : (
            <p className="center text-center text-2xl font-bold">
              No hay productos en la orden
            </p>
          )}
        </div>
      </div>
      <div className="pt-10">
        <div className="mt-10space-y-3 text-center">
          <button
            className="mb-4 w-[300px] rounded-lg bg-turquesa-profundo px-4 py-2 font-bold uppercase text-white hover:bg-[#167d77] disabled:cursor-not-allowed"
            disabled={!isValidOrden}
            onClick={handleSell}
          >
            Vender <span>{formatCurrency(total)} total</span>
          </button>
          <button
            className="mb-8 w-[300px] bg-coral-neon rounded-lg px-4 py-2 font-bold uppercase text-white hover:bg-[#cc3c3c] disabled:cursor-not-allowed "
            disabled={!isValidOrden}
            onClick={handleCancelOrder}
          >
            Cancelar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
