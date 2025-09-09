"use client";
import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Apple, Hammer, Candy, ShoppingBasket } from "lucide-react";
import { renderToString } from "react-dom/server";

export interface Store {
  readonly name: string;
  readonly category:
    | "Verdulerías"
    | "Ferreterías"
    | "Kioscos"
    | "Supermercados";
  readonly hasDiscount: boolean;
  readonly address: string;
  readonly coordinates: {
    readonly lat: string;
    readonly lng: string;
  };
}



function getCategoryIcon(category: string) {
  const SIZE = 16;
  const color = "white";
  let iconEl;

  switch (category) {
    case "Verdulerías":
      iconEl = <Apple size={SIZE} color={color} />;
      break;
    case "Ferreterías":
      iconEl = <Hammer size={SIZE} color={color} />;
      break;
    case "Kioscos":
      iconEl = <Candy size={SIZE} color={color} />;
      break;
    case "Supermercados":
      iconEl = <ShoppingBasket size={SIZE} color={color} />;
      break;
    default:
      console.warn(`Categoría desconocida: ${category}`);
      iconEl = <ShoppingBasket size={SIZE} color={color} />;
  }
  const iconHtml = `
    <div style="
      position: relative;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <!-- Pin tipo Google Maps -->
      <div style="
        position: absolute;
        width: 24px;
        height: 24px;
        background: red;
        border-radius: 50% 50% 50% 50%;
        transform: rotate(45deg);
        top: 2px;
      "></div>
      
      <!-- Ícono encima -->
      <div style="
        position: relative;
        transform: rotate(-45deg);
      ">
        ${renderToString(iconEl)}
      </div>
    </div>
  `;

  return L.divIcon({
    className: "",
    html: iconHtml,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

interface LeafletMapProps {
  stores: Store[];
}

export default function Map({ stores }: LeafletMapProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const map = L.map('map', {
      center: [-34.57432, -58.47950],
      zoom: 14,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    stores.forEach((store) => {
      const marker = L.marker(
        [parseFloat(store.coordinates.lat), parseFloat(store.coordinates.lng)],
        { icon: getCategoryIcon(store.category) }
      ).addTo(map);

      marker.bindPopup(`
        <div style="font-family: sans-serif; line-height: 1.4;">
          <strong>${store.name}</strong><br/>
          <span>Categoría: ${store.category}</span><br/>
          <span>Dirección: ${store.address}</span><br/>
          <span>Descuentos: ${store.hasDiscount ? "Sí" : "No"}</span>
        </div>
      `);
    });

    return () => {
      map.remove();
    };
  }, [stores]);

  return <div id="map" className="w-[500px] h-[300px]" />;
}
