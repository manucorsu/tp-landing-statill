import { Card, CardContent } from "@/components/ui/card";
import { User, Store, DollarSign } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        
        {/* Sección izquierda */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <div className="flex items-center gap-2">
            <div className="bg-red-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M10 3H5a2 2 0 00-2 2v2h7V3zM19 7h-7v14h7a2 2 0 002-2V9a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-red-600">Statill</h1>
          </div>

          <p className="text-gray-700 font-medium text-lg">
            La aplicación definitiva para digitalizar y organizar tu comercio.
          </p>

          <div className="flex flex-col items-center md:items-start gap-2">
            <Image
              src="/qr-placeholder.png" // reemplaza con tu QR real
              alt="QR code"
              width={120}
              height={120}
              className="rounded-lg border"
            />
            <p className="font-semibold">¡Descarga Statill gratis!</p>
          </div>
        </div>

        {/* Sección derecha */}
        <Card className="bg-gray-100 border-none shadow-none">
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-gray-700" />
              <span className="text-gray-800 font-medium text-lg">
                +100.000 usuarios
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Store className="w-6 h-6 text-gray-700" />
              <span className="text-gray-800 font-medium text-lg">
                +40.000 comercios registrados
              </span>
            </div>

            <div className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-gray-700" />
              <span className="text-gray-800 font-medium text-lg">
                +500.000 productos vendidos
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
