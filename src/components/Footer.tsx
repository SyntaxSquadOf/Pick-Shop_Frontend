import { MapPin, Mail, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-turquesa-profundo text-white h-auto py-8">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
        {/* Páginas */}
        <div>
          <h4 className="font-bold mb-3">Páginas</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Inicio</a></li>
            <li><a href="/productos" className="hover:underline">Productos</a></li>
            <li><a href="/usuarios" className="hover:underline">Usuarios</a></li>
          </ul>
        </div>

        {/* Información de Contacto */}
        <div>
          <h4 className="font-bold mb-3">Contacto</h4>
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
          <h4 className="font-bold mb-3">Síguenos</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-grafito-suave">
              <FaInstagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-grafito-suave">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
        </div>
        </div>


      {/* Sección de derechos y créditos */}
      <div className="border-t border-white/20 mt-6 pt-4 text-center relative">
        <p className="text-sm">
          © {new Date().getFullYear()} Pick and Shop. Todos los derechos reservados.
        </p>
        <div className="absolute bottom-0 right-0 p-2">
          <img src="../../public/img/syntax-squad-high-resolution-logo-transparent.png" alt="logo equipo" className="ml-8 mr-5 h-4 w-auto object-contain"/>
        </div>
        
      </div>
    </footer>
    
  );
}