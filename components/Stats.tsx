"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserRound, Store, CircleDollarSign } from "lucide-react";

const stats = [
  {
    id: 1, // odio react
    icon: <UserRound className="w-8 h-8 text-[#777777]" strokeWidth={3} />,
    text: "+100.000 usuarios",
  },
  {
    id: 2,
    icon: <Store className="w-8 h-8 text-[#777777]" strokeWidth={3} />,
    text: "+40.000 comercios registrados",
  },
  {
    id: 3,
    icon: (
      <CircleDollarSign className="w-8 h-8 text-[#777777]" strokeWidth={3} />
    ),
    text: "+500.000 productos vendidos",
  },
];

export default function Stats() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % stats.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#D9D9D9] rounded-3xl p-8 md:p-12 shadow-lg w-max mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={stats[index].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="flex gap-3"
        >
          {stats[index].icon}
          <p className="text-3xl font-bold text-[#777777]">
            {stats[index].text}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
