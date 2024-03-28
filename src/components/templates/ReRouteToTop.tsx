import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ReRouteToTop() {
  const linkPath = useLocation().pathname;
  useEffect(() => {
    window.scroll(0, 0);
  }, [linkPath]);
  return <></>;
}
export default ReRouteToTop;
