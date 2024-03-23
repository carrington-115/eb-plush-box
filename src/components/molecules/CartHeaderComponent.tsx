import { IoMdCart } from "react-icons/io";
import { cartHeaderCompPropType } from "../../types/vartypes";

function CartHeaderComponent({
  setOrderFunc,
  orderNumber,
  userNameInitial,
}: cartHeaderCompPropType) {
  return (
    <div>
      <div className="mob-user-btns">
        <div className="cart-btn" onClick={setOrderFunc}>
          <span className="cart-icon">
            <IoMdCart style={{ width: "16px", height: "16px" }} />
          </span>
          <span className="order-number">{orderNumber}</span>
        </div>
        <button className="account-btn" type="button">
          <span>
            <h1>{userNameInitial}</h1>
          </span>
        </button>
      </div>
    </div>
  );
}
export default CartHeaderComponent;
