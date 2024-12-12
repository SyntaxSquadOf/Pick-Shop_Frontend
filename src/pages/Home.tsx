import Header from "../components/Header";
import { GiPaperBagOpen } from "react-icons/gi";
import { LuMonitorCheck } from "react-icons/lu";
import { HiOutlineEmojiHappy } from "react-icons/hi";



export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
    <Header />

    {/* Hero Section */}
    <section
      className="relative h-[34rem] bg-cover bg-center"
      style={{ backgroundImage: 'url(./public/img/homecover2.png)' }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-5xl font-bold mb-4">Tu Minimarket a un Click</h1>
        <p className="text-xl">Mejora la experiencia de compra de tus clientes y gestiona tu inventario fácilmente.</p>
        <button className="bg-grafito-suave hover:bg-coral-neon text-white font-bold py-2 px-4 rounded-2xl mt-3">
            Empezar
          </button>
      </div>
    </section>

    {/* Icon Section */}
    <section className="bg-white py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Beneficios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className=" text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <GiPaperBagOpen className="text-purple-500 text-8xl" />
            </div>
            <h3 className="text-lg font-bold">Compra Eficiente</h3>
            <p className="text-gray-600 text-center">ingreso y salida de productos</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <LuMonitorCheck className="text-grafito-suave text-8xl" />
            </div>
            <h3 className="text-lg font-bold">Información Registrada</h3>
            <p className="text-gray-600 text-center">tu inventario y tus clientes en un solo lugar</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            <HiOutlineEmojiHappy className="text-coral-neon text-8xl" />
            </div>
            <h3 className="text-lg font-bold">Clientes Felices</h3>
            <p className="text-gray-600 text-center">sistema de acumulación de puntos</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
