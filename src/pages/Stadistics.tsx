import React from "react";

export default function Statistics() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
        {/* Statistics Column */}
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-bold">Estadísticas</h2>
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
              <span className="font-semibold text-green-600">+12.5%</span>
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className="flex items-center justify-center">
          <img
            src="/img/pickshopbar.png"
            alt="Estadísticas"
            className="h-auto max-w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
