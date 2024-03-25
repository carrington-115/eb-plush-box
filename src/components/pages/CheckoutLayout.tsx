import { Outlet } from "react-router-dom";
import { Accordion, Newsletter } from "../organisms";
import "../../app/design/layout.css";

function CheckoutLayout() {
  return (
    <div className="page-container">
      <div className="page-details-container">
        <Outlet />
      </div>
      <Accordion />
      <Newsletter />
    </div>
  );
}
export default CheckoutLayout;
