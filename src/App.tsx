import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stadistics from "./pages/Stadistics";
import { Pos } from "./pages/Pos";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductForm />} />
          <Route path="/users" element={<Products />} />
          <Route path="/add-user" element={<ProductForm />} />
          <Route path="/users/:id" element={<ProductForm />} />
          <Route path="/stadistics" element={<Stadistics />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
