import React from "react";
type SpikesColor = "red" | "white";
export default function SpikeSep({
  height = 93,
  overlap = 10,
  color = "white",
  ariaLabel = "spike separator",
  className = "spike-separator",
}) {
  const src = color === "white" ? "/pinchos.svg" : "/pinchos-red.svg";
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
      style={{ height: height, marginBottom: `-${overlap}px` }}
      aria-hidden={ariaLabel ? "false" : "true"}
      aria-label={ariaLabel || undefined}
    >
      <div style={{ height: height }}>
        <img
          src={src}
          alt={ariaLabel ? ariaLabel : ""}
          role={ariaLabel ? "img" : "presentation"}
          className="block w-full h-full object-cover transform"
        />
      </div>
    </div>
  );
}
