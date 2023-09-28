import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { RequestType } from "../../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle(requests: RequestType[]) {
  if (requests.length < 1) return requests;

  let top: RequestType[] = [];
  let bottom: RequestType[] = [];

  requests.forEach((ele, index) => {
    index % 2 ? bottom.push(ele) : top.push(ele);
  });

  return [...top, ...bottom];
}
