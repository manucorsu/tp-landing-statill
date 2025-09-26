import { useState } from "react";

export default function AnimatedButton({ text = "" }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className={`cursor-pointer text-white font-semibold rounded-full px-6 py-2 shadow mt-4 relative overflow-hidden transform transition-all ${
          clicked ? "scale-70 bg-[#962020]" : "scale-100 bg-[#FF3938]"
        }`}
      >
        {text}
      </button>
    </div>
  );
}
