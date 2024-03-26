import styled from "styled-components";
import { CartList } from "../organisms";
import { productTwo } from "../../assets";
import { Steps } from "../molecules";
import { steps } from "../data";

function Cart() {
  return (
    <>
      <Steps steps={steps} />
      <FormSection>
        <CartList
          cartProducts={[
            {
              id: "143akjaglj;ag",
              image: productTwo,
              name: "Valentine Gift",
              price: 200,
            },
            {
              id: "143akjaglj;ag",
              image: productTwo,
              name: "Valentine Gift",
              price: 200,
            },
          ]}
          checkoutBtnAction={() => console.log("checkout from cart")}
          totalPrice={1000}
        />
      </FormSection>
    </>
  );
}
export default Cart;

const FormSection = styled.section`
  width: 45%;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 100%;
    order: 1;
  }
`;
