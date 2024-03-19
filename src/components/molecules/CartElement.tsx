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
        <p>{productPrice}</p>
        <Button
          text={true}
          icon={false}
          name="Complete the order"
          status="fill"
          color=""
          bgColor=""
          btnAction={() => console.log("Complete the order")}
        />
      </div>
    </Container>
  );
}
export default CartElement;

const Container = styled.div``;
