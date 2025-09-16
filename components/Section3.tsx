"use client";
import { useState } from "react";
import Image from "next/image";
import { SquarePen, SquareCheck } from "lucide-react";
import CloudSep from "./CloudSep";
import AnimatedButton from "./AnimatedButton";

interface Product {
  id: number;
  name: string;
  desc: string;
  qty: number;
  price: number;
}

const ars = (num: number) => {
  return num.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });
};

function ProductCard({
  product,
  onUpdate,
  startEditing = false,
}: {
  product: Product;
  onUpdate: (updated: Product) => void;
  startEditing?: boolean;
}) {
  const [isEditing, setIsEditing] = useState(startEditing);
  const [edited, setEdited] = useState<Product>(product);

  const imagePath = [1, 2, 3].includes(product.id)
    ? `/product${product.id}.png`
    : "/statill.svg";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setEdited((prev) => ({
      ...prev,
      [name]: name === "qty" || name === "price" ? Number(value) || 0 : value,
    }));
  };

  const handleSave = () => {
    onUpdate(edited);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">
      <Image src={imagePath} alt={product.name} width={56} height={56} />

      <div className="flex-1">
        {isEditing ? (
          <>
            <input
              type="text"
              name="name"
              value={edited.name}
              onChange={handleChange}
              className="w-full font-semibold text-black border rounded px-1 mb-1"
              placeholder="Nombre del producto"
            />
            <textarea
              name="desc"
              value={edited.desc}
              onChange={handleChange}
              className="w-full text-xs text-black border rounded px-1"
              placeholder="Descripción del producto"
            />
          </>
        ) : (
          <>
            <div className="font-semibold text-black">{product.name}</div>
            <div className="text-xs text-black">{product.desc}</div>
          </>
        )}
      </div>

      <div className="text-right">
        {isEditing ? (
          <>
            <span className="text-xs text-[#000]">cantidad: </span>
            <input
              type="number"
              name="qty"
              value={edited.qty}
              onChange={handleChange}
              className="w-16 text-sm text-gray-600 border rounded px-1 mb-1"
              placeholder="0"
            />
            <span className="text-xs text-[#000]">precio: </span>
            <input
              type="number"
              name="price"
              value={edited.price}
              onChange={handleChange}
              className="w-16 text-[#000] font-semibold border rounded px-1"
              placeholder="0"
            />
          </>
        ) : (
          <>
            <div className="text-sm text-gray-600">X{product.qty}</div>
            <div className="font-semibold">{ars(product.price)}</div>
          </>
        )}
      </div>

      <button
        onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        className="ml-4 p-2 rounded-md border border-gray-200 hover:bg-gray-50"
      >
        {isEditing ? (
          <SquareCheck color="black" />
        ) : (
          <SquarePen color="black" />
        )}
      </button>
    </div>
  );
}

function TablaCart({ products }: { products: Product[] }) {
  const [cart, setCart] = useState<
    { productId: number | null; quantity: number }[]
  >([
    { productId: products[0]?.id ?? null, quantity: 1 },
    { productId: products[1]?.id ?? null, quantity: 1 },
    { productId: products[2]?.id ?? null, quantity: 1 },
  ]);

  const handleProductChange = (rowIndex: number, productId: number) => {
    setCart((prev) =>
      prev.map((row, i) => (i === rowIndex ? { productId, quantity: 1 } : row)),
    );
  };

  const handleQuantityChange = (rowIndex: number, qty: number) => {
    setCart((prev) =>
      prev.map((row, i) => (i === rowIndex ? { ...row, quantity: qty } : row)),
    );
  };

  const total = cart.reduce((sum, row) => {
    const product = products.find((p) => p.id === row.productId);
    if (!product) return sum;
    return sum + product.price * row.quantity;
  }, 0);

  return (
    <div className="md:col-span-1 order-1 md:order-none flex justify-center items-center h-full">
      <div className="bg-white text-gray-800 rounded-xl p-6 w-full max-w-xl flex flex-col justify-center items-center">
        <table className="w-full table-fixed text-sm">
          <thead>
            <tr className="text-left border-b">
              <th className="pb-3 text-center">Producto</th>
              <th className="pb-3 text-center">Precio</th>
              <th className="pb-3 text-center">Cantidad</th>
              <th className="pb-3 text-right">Precio final</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, i) => {
              const product = products.find((p) => p.id === row.productId);

              // filter out products already in cart (except current one)
              const usedIds = cart
                .map((c, idx) => (idx !== i ? c.productId : null))
                .filter(Boolean);

              const availableProducts = products.filter(
                (p) => !usedIds.includes(p.id),
              );

              return (
                <tr key={i} className="border-b text-center">
                  <td className="py-4 font-semibold">
                    <select
                      className="border rounded px-2 py-1"
                      value={row.productId ?? ""}
                      onChange={(e) =>
                        handleProductChange(i, Number(e.target.value))
                      }
                    >
                      <option value="">Seleccionar...</option>
                      {availableProducts.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-4">{product ? ars(product.price) : "-"}</td>
                  <td className="py-4">
                    {product ? (
                      <input
                        type="number"
                        min={1}
                        max={product.qty}
                        value={row.quantity}
                        onChange={(e) =>
                          handleQuantityChange(i, Number(e.target.value))
                        }
                        className="w-16 border rounded text-center"
                      />
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="py-4 text-right font-bold">
                    {product ? ars(product.price * row.quantity) : "-"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="mt-6 flex flex-col items-center justify-center w-full">
          <div className="font-semibold text-center">
            Precio total final: <span className="font-bold">{ars(total)}</span>
          </div>
          <div className="font-semibold text-center text-s text-[#777777]">
            Sin impuestos nacionales: {ars(total - 0.21 * total)}
          </div>
          <AnimatedButton text="Cobrar"/>
        </div>
      </div>
    </div>
  );
}

export default function Section3() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Arroz Gallo Oro",
      desc: "Una marca de arroz imperdible",
      qty: 89,
      price: 800,
    },
    {
      id: 2,
      name: "Alfajor Jorgito",
      desc: "Un alfajor destacado por el vendedor",
      qty: 105,
      price: 305,
    },
    {
      id: 3,
      name: "Skip para diluir",
      desc: "Jabón líquido para todo tipo de ropas",
      qty: 40,
      price: 2400,
    },
  ]);

  const [editingNewId, setEditingNewId] = useState<number | null>(null);

  const cantidadesEjemplo = [3, 2, 2];
  const total = products.reduce(
    (acum, p, i) => acum + p.price * (cantidadesEjemplo[i] ?? 1),
    0,
  );

  const handleUpdate = (updated: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const handleAddProduct = () => {
    const newId = products.length
      ? Math.max(...products.map((p) => p.id)) + 1
      : 1;
    const newProduct: Product = {
      id: newId,
      name: "",
      desc: "",
      qty: 0,
      price: 0,
    };
    setProducts((prev) => [...prev, newProduct]);
    setEditingNewId(newId);
  };
  return (
    <>
      <section className="min-h-screen bg-[#FF3938] p-8 text-white relative overflow-hidden flex flex-col">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-6 text-center">
            Organizar y vender tu catálogo nunca fue tan simple.
          </h1>
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-3 bg-white text-red-500 rounded-xl px-4 py-3 font-semibold shadow-md"
          >
            <span className="bg-white/0 rounded-full w-8 h-8 flex items-center justify-center border border-gray-200">
              +
            </span>
            Agregar un producto
          </button>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="md:col-span-1 space-y-4">
              <div className="space-y-3">
                {products.map((p) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    onUpdate={handleUpdate}
                    startEditing={editingNewId === p.id}
                  />
                ))}
              </div>
            </div>
            <TablaCart products={products} />
          </div>
        </div><br /><br /><br />
        <div className="absolute left-0 right-0 bottom-0 w-full pointer-events-none">
          <CloudSep color="grey" />
        </div>
      </section>
      <div className="bg-[#EEEEEE]"><br /></div>
    </>
  );
}
