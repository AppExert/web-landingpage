import { LayoutContext } from "@components/layoutContext";
import { useContext } from "react";

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a Layout provider");
  }
  return context;
};
