import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Stadistics from "./pages/Stadistics";
import { Pos } from "./pages/Pos";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Users from "./pages/Users";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/pos" element={<Pos />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductForm />} />
          <Route path="/users" element={<Users />} />
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
