"use client";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Store } from "./Map";

export const stores: Store[] = [
  {
    name: "Verdulería Marco",
    category: "Verdulerías",
    hasDiscount: false,
    address: "Echeverría 5367, C1431CMQ Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.58079864937962",
      lng: "-58.484577122324524",
    },
  },
  {
    name: "Sergia",
    category: "Verdulerías",
    hasDiscount: true,
    address:
      "Av. Triunvirato 4250, C1431 Villa Urquiza, Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.578121896603186",
      lng: "-58.48072372478783",
    },
  },
  {
    name: "Ferretería Tito",
    category: "Ferreterías",
    hasDiscount: true,
    address: "Cullen 5200, C1431 Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.573377243288284",
      lng: "-58.48873058522858",
    },
  },
  {
    name: "Bolche",
    category: "Kioscos",
    hasDiscount: false,
    address: "Monroe 5023, C1431 Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.573766168480695",
      lng: "-58.485719203856355",
    },
  },
  {
    name: "MAXID10SKO",
    category: "Kioscos",
    hasDiscount: false,
    address: "Blanco Encalada 5029, C1431 Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.57504750141557",
      lng: "-58.485883588512955",
    },
  },
  {
    name: "El Más Grande",
    category: "Kioscos",
    hasDiscount: true,
    address: "Av. Olazábal 4878, C1431CGR Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.575339462674606",
      lng: "-58.48371892939139",
    },
  },
  {
    name: "Don Fierro",
    category: "Ferreterías",
    hasDiscount: false,
    address: "Dr. Pedro I. Rivera 4724, C1431 Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.569885832486214",
      lng: "-58.48397708912295",
    },
  },
  {
    name: "Supermercado SUNNY",
    category: "Supermercados",
    hasDiscount: true,
    address: "Av. Congreso 4395, C1430BAG Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.56553865354333",
      lng: "-58.48262121734916",
    },
  },
  {
    name: "Supermercado Pampa",
    category: "Supermercados",
    hasDiscount: false,
    address: "La Pampa 5192, C1431CQN Cdad. Autónoma de Buenos Aires",
    coordinates: {
      lat: "-34.580279638031676",
      lng: "-58.48086065609222",
    },
  },
];

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function Section4() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // 🔎 Filtrado simple
  const filteredStores = stores.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase());

    if (categoryFilter !== "Con descuento") {
      const matchesCategory = categoryFilter
        ? s.category === categoryFilter
        : true;
      return matchesSearch && matchesCategory;
    } else {
      return matchesSearch && s.hasDiscount;
    }
  });

  const categories = [
    "Verdulerías",
    "Ferreterías",
    "Kioscos",
    "Supermercados",
    "Con descuento",
  ];

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-[#EEEEEE]">
      {/* Título */}
      <h1 className="text-[#FF3938] font-bold text-3xl text-center mb-6">
        Encuentra el local que necesites en cuestión de segundos.
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Sidebar izquierda */}
        <div className="flex flex-col gap-4 w-64">
          {/* Barra de búsqueda */}
          <div className="flex items-center gap-2 border rounded-full px-4 py-2 bg-white shadow-sm">
            <Search size={16} className="min-w-[16px] min-h-[16px]" />
            <input
              type="text"
              placeholder="Busca un local..."
              className="outline-none flex-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Botones */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setCategoryFilter(categoryFilter === cat ? null : cat)
                }
                className={`px-4 py-2 rounded-full shadow text-sm ${
                  categoryFilter === cat
                    ? "bg-red-500 text-white"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Mapa */}
        <div className="border-20 border-[#FF3938] rounded-lg overflow-hidden">
          <Map stores={filteredStores} />
        </div>
      </div>
    </div>
  );
}
