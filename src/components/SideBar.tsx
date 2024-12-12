export default function SideBar() {
  return (
    <div className="flex h-screen w-64 flex-col justify-between bg-gray-800 p-6 text-white">
      <div>
        <h2 className="mb-6 text-2xl font-bold">POS System</h2>
      </div>
      <div>
        <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          Vender
        </button>
      </div>
    </div>
  );
}
