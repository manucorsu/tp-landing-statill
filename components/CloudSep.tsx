import React from "react";

type CloudsColor = "grey" | "white";

export default function CloudSep({
  height = 93,
  overlap = 10,
  color: CloudsColor = "white",
  ariaLabel = "cloud separator",
  className = "cloud-separator",
}) {
  const src = CloudsColor === "grey" ? "/nubes-grey.svg" : "/nubes.svg";
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
