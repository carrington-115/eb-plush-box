import styled from "styled-components";
import {
  cartListElementPropsType,
  cartListPropsType,
} from "../../types/vartypes";
import { Button } from "../atoms";

function CartList({
  cartProducts,
  totalPrice,
  checkoutBtnAction,
}: cartListPropsType) {
  return (
    <Container>
      <div className="inner-products">
        {cartProducts.map(
          ({
            id,
            image,
            name,
            price,
            removeElementAction,
          }: cartListElementPropsType) => (
            <ListElement
              key={id}
              id={id}
              image={image}
              name={name}
              price={price}
              removeElementAction={removeElementAction}
            />
          )
        )}
      </div>
      <div className="checkout-section">
        <p className="total-price">$ {totalPrice}</p>
        <Button
          text={true}
          icon={false}
          name="Pay now"
          color="rgba(255, 255, 255, 1)"
          bgColor="rgba(61, 43, 21, 1)"
          status="fill"
          btnAction={checkoutBtnAction}
        />
      </div>
    </Container>
  );
}

function ListElement({
  image,
  name,
  price,
  removeElementAction,
}: cartListElementPropsType) {
  return (
    <ElementContainer>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <p className="product-name">{name}</p>
      <h3 className="product-price">$ {price}</h3>
      <button className="remove-element-icon" onClick={removeElementAction}>
        <p>-</p>
      </button>
    </ElementContainer>
  );
}
export default CartList;
const ElementContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
  color: rgba(20, 14, 7, 1);
  background-color: transparent;
  cursor: pointer;
  padding: 7px 0px;
  &:hover {
    background-color: rgba(141, 104, 97, 0.25);
  }
  @media (min-width: 320px) and (max-width: 599px) {
    padding: 5px;
    justify-content: space-between;
  }
  .image {
    width: 100px;
    height: auto;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 65px;
      height: auto;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .product-name {
    font-size: 24.737px;
    font-style: normal;
    font-weight: 700;
    line-height: 31.483px;
    width: 40%;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 16px;
      width: 35%;
    }
  }
  .product-price {
    width: 15%;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 31.483px;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 18px;
      width: 20%;
    }
  }
  .remove-element-icon {
    width: 10%;
    border: none;
    background-color: transparent;
    font-size: 30px;
    color: rgba(20, 14, 7, 1);
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(20, 14, 7, 0.4);
    }
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;
  padding: 30px 20px;
  background-color: rgba(234, 215, 211, 1);
  border-radius: 45px;
  gap: 100px;
  @media (min-width: 320px) and (max-width: 599px) {
    padding: 40px 20px;
  }
  .inner-products {
    display: inherit;
    flex-direction: column;
    gap: 10px;
    width: 95%;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 98%;
    }
  }
  .checkout-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .total-price {
      color: rgba(61, 43, 21, 1);
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 44.976px;
    }
  }

  @media (min-width: 320px) and (max-width: 599px) {
    width: 90%;
  }
`;
