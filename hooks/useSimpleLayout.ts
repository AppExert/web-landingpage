import { useEffect } from "react";
import { useLayout } from "./useLayout";

/**
 * Gets rid of footer, footer copyright sections.
 * Hide Navbar menu
 */

export const useSimpleLayout = () => {
  const { dispatch } = useLayout();

  useEffect(() => {
    dispatch({ type: "TOGGLE_FOOTER" });
    dispatch({ type: "TOGGLE_FOOTER_COPYRIGHT" });
    dispatch({ type: "TOGGLE_NAV_MENU" });
    return () => {
      dispatch({ type: "TOGGLE_FOOTER" });
      dispatch({ type: "TOGGLE_FOOTER_COPYRIGHT" });
      dispatch({ type: "TOGGLE_NAV_MENU" });
    };
  }, []);
};
