import Header from "../components/Header";

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
        <h1 className="text-5xl font-bold mb-4">texto texto texto texto</h1>
        <p className="text-xl">texto</p>
      </div>
    </section>

    {/* Icon Section */}
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Beneficios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-cog text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold">Texto</h3>
            <p className="text-gray-600 text-center">más texto.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-leaf text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold">Texto</h3>
            <p className="text-gray-600 text-center">más texto.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
              <i className="fas fa-star text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold">Texto</h3>
            <p className="text-gray-600 text-center">más texto.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}
