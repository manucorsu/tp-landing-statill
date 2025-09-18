import { UserRound, Store, CircleDollarSign } from "lucide-react";
import QRCode from "react-qr-code";
import Image from "next/image";
import CloudSep from "./CloudSep";

export default function Section1() {
  return (
    <div className="min-h-screen bg-[#eeeeee] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0" 
        aria-hidden="true"
        style={{
          backgroundImage: "url(/rectangumas.svg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1920px 500px",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/statill-text.png"
              alt="Statill"
              width={480}
              height={480}
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight text-balance">
            La aplicación definitiva para digitalizar y organizar tu comercio.
          </h2>
        </div>

        {/*"main"*/}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* QR */}
          <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
            <div className="inline-block bg-white p-4 rounded-lg shadow-lg">
              <QRCode
                value="https://statill-api.onrender.com/api/v1/docs"
                size={192}
              />
            </div>

            {/* Download Text */}
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-black">
                ¡Descarga
                <br />
                Statill
                <br />
                gratis!
              </p>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="space-y-8 bg-[#D9D9D9] rounded-3xl p-8 md:p-12 shadow-lg w-max mx-auto">
            <div className="flex gap-3">
              <UserRound className="w-8 h-8 text-[#777777]" strokeWidth={3} />
              <p className="text-3xl font-bold text-[#777777]">
                +100.000 usuarios
              </p>
            </div>
            <div className="flex gap-3">
              <Store className="w-8 h-8 text-[#777777]" strokeWidth={3} />
              <p className="text-3xl font-bold text-[#777777]">
                +40.000 comercios registrados
              </p>
            </div>
            <div className="flex gap-3">
              <CircleDollarSign
                className="w-8 h-8 text-[#777777]"
                strokeWidth={3}
              />
              <p className="text-3xl font-bold text-[#777777]">
                +500.000 productos vendidos
              </p>
            </div>
          </div>
        </div>
      </div>
      <CloudSep />
    </div>
  );
}
