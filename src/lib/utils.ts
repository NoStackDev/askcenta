import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RequestType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(data: T, dataType?: "response") {
  if (!Array.isArray(data)) return data;
  if (dataType && dataType === "response") return data;
  if (data.length < 1) return data;

  let top: T[] = [];
  let bottom: T[] = [];

  data.forEach((ele, index) => {
    index % 2 ? bottom.push(ele) : top.push(ele);
  });

  return [...top, ...bottom];
}

export const month = (index: number) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return months[index];
};

export const randomBgColor = () => {
  const bgColors = [`#E393DB`, `#EB89B5`, `#6DDDC1`, `#8CCBFA`];
  return bgColors[Math.round(Math.random() * (bgColors.length - 1))];
};
