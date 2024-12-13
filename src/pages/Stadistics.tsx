import React from 'react';

export default function Statistics() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Statistics Column */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Estadísticas</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total de Usuarios</span>
              <span className="font-semibold">5</span>
            </div>
            <div className="flex justify-between">
              <span>Ventas Mensuales</span>
              <span className="font-semibold">$45,678</span>
            </div>
            <div className="flex justify-between">
              <span>Crecimiento</span>
              <span className="text-green-600 font-semibold">+12.5%</span>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex justify-center items-center">
          <img 
            src="../../public/img/pickshopbar.png" 
            alt="Estadísticas" 
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}