import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main>
        <div className="text-3xl text-gray-800">
          ¡Bienvenido a mi página de inicio!
        </div>
      </main>
    </div>
  );
}
