"use client";
import Image from "next/image";
import { UserRound, AtSign } from "lucide-react";
import QRCode from "react-qr-code";
import AnimatedButton from "./AnimatedButton";

export default function Section5() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center px-6 md:px-16 py-10 space-y-10 md:space-y-0">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
          ¿Alguna duda? ¡Contáctanos!
        </h2>

        <form className="flex flex-col space-y-4 w-full">
          <div>
            <label className="block text-sm font-semibold">Nombre</label>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
              <UserRound className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Tu nombre aquí..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold">Correo</label>
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-2">
              <AtSign className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Tu correo aquí..."
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold">Consulta</label>
            <textarea
              placeholder="Tu consulta aquí..."
              className="w-full bg-gray-100 rounded-lg p-3 text-sm outline-none"
              rows={4}
            />
          </div>

          <AnimatedButton text="Enviar" />
        </form>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center mt-10 md:mt-0 space-y-10">
        <div className="flex items-center space-x-2">
          <Image
            src="/statill-text.png"
            alt="Logo Statill"
            width={300}
            height={300}
          />
        </div>

        <div className="flex flex-row items-center space-x-4">
          <Image
            src={"/app-store-google-play.png"}
            alt="App Store y Google Play"
            width={200}
            height={60}
          />
          <QRCode
            value="https://statill-api.onrender.com/api/v1/docs"
            size={100}
          />
        </div>
      </div>
    </div>
  );
}
