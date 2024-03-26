import styled from "styled-components";
import { StepComponent } from "../atoms";
import { CartList } from "../organisms";
import { productTwo } from "../../assets";

const steps: string[] = [
  "Double-check your selections and review your cart details.",
  "Select a payment method, and confirm your order details.",
  " Finalize your purchase by securely entering your payment information",
  "You can now relax for your order to be delivered",
];

function Cart() {
  return (
    <>
      <Steps>
        <h2>Follow the steps to complete your order</h2>
        {steps.map((text, index) => (
          <StepComponent key={index} number={index + 1} title={text} />
        ))}
      </Steps>
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

const Steps = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  width: 45%;
  gap: 20px;

  @media (min-width: 320px) and (max-width: 599px) {
    display: flex;
    gap: 15px;
    width: 90%;
    order: 2;
  }

  h2 {
    align-self: center;
    font-size: 24px;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 20px;
    }
  }
`;

const FormSection = styled.section`
  width: 45%;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 100%;
    order: 1;
  }
`;
