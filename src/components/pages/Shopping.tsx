import "../../app/design/shopping.css";
import { UserInput } from "../atoms";

function Shopping() {
  return (
    <div className="page-container">
      <div className="search-section">
        <UserInput type="search" inputName="search" />
      </div>
    </div>
  );
}
export default Shopping;
