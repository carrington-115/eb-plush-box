import { IoMdCart } from "react-icons/io";
import { cartHeaderCompPropType } from "../../types/vartypes";
import styled from "styled-components";

function CartHeaderComponent({
  setOrderFunc,
  orderNumber,
  userNameInitial,
}: cartHeaderCompPropType) {
  return (
    <CartContainer>
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
    </CartContainer>
  );
}
export default CartHeaderComponent;

const CartContainer = styled.header`
  width: fit-content;
  justify-self: flex-end;
  margin-left: 15%;
  .mob-user-btns {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    .cart-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 50%;
      background-color: rgba(251, 247, 246, 1);
      border: none;
      &:hover {
        background-color: rgba(234, 215, 211, 1);
      }
      cursor: pointer;
      .cart-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
      }
      .order-number {
        position: absolute;
        top: -10px;
        right: 0;
        background-color: rgba(67, 31, 23, 1);
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        border-radius: 20px;
        h1 {
          font-size: 12px;
          font-family: "El Messiri";
        }
      }
    }

    .account-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 10px 12px;
      border-radius: 50%;
      background-color: rgba(67, 31, 23, 1);
      color: rgba(234, 215, 211, 1);
      cursor: pointer;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px 2px;
        h1 {
          font-size: 16px;
        }
      }
    }
  }
`;
