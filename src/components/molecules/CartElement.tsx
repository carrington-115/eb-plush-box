import styled from "styled-components";
import { Button } from "../atoms";
import { cartProductType } from "../../types/vartypes";

function CartElement({
  productImage,
  productName,
  productPrice,
}: cartProductType) {
  return (
    <Container>
      <div className="product-image">
        <img src={productImage} alt={productName} />
      </div>
      <div className="product-name">
        <p>{productName}</p>
      </div>
      <div className="product-action">
        <p className="product-price">$ {productPrice}</p>
        <Button
          text={true}
          icon={false}
          name="Complete the order"
          status="fill"
          color="white"
          bgColor="rgba(67, 31, 23, 1)"
          btnAction={() => console.log("Complete the order")}
        />
      </div>
    </Container>
  );
}
export default CartElement;

const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1cm 0;
  padding: 30px;
  color: rgba(67, 31, 23, 1);
  background-color: rgba(234, 215, 211, 0.7);
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(234, 215, 211, 1);
  }
  .product-image {
    width: 200px;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .product-name {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }

  .product-action {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    .product-price {
      font-size: 24px;
    }
  }
`;
