import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useResetScroll() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
}
