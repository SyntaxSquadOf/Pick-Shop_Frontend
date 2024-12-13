import { MapPin, Mail, Phone } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-turquesa-profundo py-8 text-white">
      <div className="mx-auto grid w-full gap-6 px-4 md:grid-cols-3">
        {/* Páginas */}
        <div>
          <h4 className="mb-3 font-bold">Páginas</h4>
          <ul className="space-y-2">
            <li>
              <Link to={"/"}>Inicio</Link>
            </li>
            <li>
              <Link to={"/products"}>Productos</Link>
            </li>
            <li>
              <Link to={"/users"}>Usuarios</Link>
            </li>
          </ul>
        </div>

        {/* Información de Contacto */}
        <div>
          <h4 className="mb-3 font-bold">Contacto</h4>
          <div className="space-y-2">
            <div className="flex items-center">
              <Mail className="mr-2" size={20} />
              <a href="#">hello@pickandshop.co</a>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span>Cali CJ 4040</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={20} />
              <a href="tel:3112341232">311 234 1232</a>
            </div>
          </div>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="mb-3 font-bold">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-grafito-suave">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-grafito-suave">
              <FaFacebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Sección de derechos y créditos */}
      <div className="relative mt-6 border-t border-white/20 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Pick and Shop. Todos los derechos
          reservados.
        </p>
        <div className="absolute bottom-0 right-0 p-2">
          <img
            src="/img/syntax-squad-high-resolution-logo-transparent.png"
            alt="logo equipo"
            className="h-6 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
