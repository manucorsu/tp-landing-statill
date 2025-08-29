"use client";
import React from "react";
import QRCode from "react-qr-code";
type QRCardProps = {
  value: string,
  codeSize: number,
}
export default function QRCard({value, codeSize}: QRCardProps): React.JSX.Element {
  return (
    <>
      <div className="bg-gray-100 p-3 rounded-lg flex-shrink-0">
        <QRCode value={value} size={codeSize}></QRCode>
      </div>
      <div className="bg-gray-100 p-3 rounded-lg flex-1">
        <div className="text-xs text-gray-500 mb-2">
          ¡Descarga Statill gratis!
        </div>
        <div className="bg-white rounded p-3 text-sm text-gray-700">
          <div className="text-gray-400 text-sm">+100.000 usuarios</div>
          <div className="text-gray-400 text-sm">
            +40.000 comercios registrados
          </div>
          <div className="text-gray-400 text-sm">
            +500.000 productos vendidos
          </div>
        </div>
      </div>
    </>
  );
}
