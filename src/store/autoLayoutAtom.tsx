import { atomWithStorage } from "jotai/utils";

export const autoLayoutAtom = atomWithStorage("autoLayoutAtom", false);
export const flexDirectionAtom = atomWithStorage<
  "flex-row" | "flex-col" | "flex-wrap"
>("flexDirectionAtom", "flex-row");
