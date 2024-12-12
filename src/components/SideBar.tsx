export default function SideBar() {
  return (
    <div className="flex h-screen w-auto flex-col bg-gray-800 p-6 text-white">
      <div>
        <h2 className="mb-6 text-2xl font-bold">POS System</h2>
      </div>
      <div></div>
      <div>Lista de productos y botones</div>
      <div>
        <div></div>
        <div className="space-y-3">
          <button className="w-full rounded bg-green-500 px-4 py-2 font-bold uppercase text-white hover:bg-green-600">
            Vender <span>$ {} total</span>
          </button>
          <button className="w-full rounded bg-red-500 px-4 py-2 font-bold uppercase text-white hover:bg-red-600">
            Cancelar Pedido
          </button>
        </div>
      </div>
    </div>
  );
}
