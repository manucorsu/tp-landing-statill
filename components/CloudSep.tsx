import React from "react";

export default function CloudSep({
  height = 93,
  overlap = 10,
  color = "#ffffff",
  ariaLabel = "cloud separator",
  className = "cloud-separator",
}) {
  return (
    <div
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
      style={{ height: height, marginBottom: `-${overlap}px` }}
      aria-hidden={ariaLabel ? "false" : "true"}
      aria-label={ariaLabel || undefined}
    >
      <div style={{ height: height }}>
        <img
          src={"/nubes.svg"}
          alt={ariaLabel ? ariaLabel : ""}
          role={ariaLabel ? "img" : "presentation"}
          className="block w-full h-full object-cover transform"
        />
        {color && (
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ color: color, pointerEvents: "none" }}
          />
        )}
      </div>
    </div>
  );
}
