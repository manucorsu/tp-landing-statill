import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const firstXChars = (
  // esto va a acá?
  s: string,
  x: number,
  ellipsis: boolean = true,
): string => {
  if (!Number.isInteger(x) || x < 1) {
    throw Error("x must be a positive integer.");
  }
  let newString: string = s.slice(0, x);
  if (ellipsis && newString !== s) {
    return (newString += "...");
  }
  return newString;
};
