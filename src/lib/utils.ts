import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RequestType } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(requests: T[]) {
  if (requests.length < 1) return requests;

  let top: T[] = [];
  let bottom: T[] = [];

  requests.forEach((ele, index) => {
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
