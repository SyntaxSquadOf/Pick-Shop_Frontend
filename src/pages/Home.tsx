import Header from "../components/Header";
import { GiPaperBagOpen } from "react-icons/gi";
import { LuMonitorCheck } from "react-icons/lu";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { Link } from "react-router-dom";
import HomePageAnimation from "../components/HomeAnimation";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[42rem] bg-cover bg-center"
        style={{ backgroundImage: "url(./public/img/homecover2.png)" }}
      >
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
          <h1 className="mb-4 text-5xl font-bold">Tu Minimarket a un Click</h1>
          <p className="text-xl">
            Mejora la experiencia de compra de tus clientes y gestiona tu
            inventario fácilmente.
          </p>
          <button className="mt-3 rounded-2xl bg-grafito-suave px-4 py-2 font-bold text-white hover:bg-coral-neon">
            <Link to={"/pos"}>Empezar</Link>
          </button>
          
        </div>
      </section>
      <HomePageAnimation />
      {/* Icon Section */}
      <section className="bg-white py-32">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center text-3xl font-bold">Beneficios</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white">
                <GiPaperBagOpen className="text-8xl text-purple-500" />
              </div>
              <h3 className="text-lg font-bold">Compra Eficiente</h3>
              <p className="text-center text-gray-600">
                ingreso y salida de productos
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white">
                <LuMonitorCheck className="text-8xl text-grafito-suave" />
              </div>
              <h3 className="text-lg font-bold">Información Registrada</h3>
              <p className="text-center text-gray-600">
                tu inventario y tus clientes en un solo lugar
              </p>
              
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white">
                <HiOutlineEmojiHappy className="text-8xl text-coral-neon" />
              </div>
              <h3 className="text-lg font-bold">Clientes Felices</h3>
              <p className="text-center text-gray-600">
                sistema de acumulación de puntos
              </p>
              
            </div>1
          </div>
        </div>
      </section>
    </div>
  );
}
