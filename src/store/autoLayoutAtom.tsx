import { atom } from "jotai";

export const autoLayoutAtom = atom(false);
export const flexDirectionAtom = atom<"flex-row" | "flex-col" | "flex-wrap">(
  "flex-row"
);
