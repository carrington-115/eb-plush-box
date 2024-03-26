import styled from "styled-components";
import { StepComponent } from "../atoms";

const steps: string[] = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
];

function Cart() {
  return (
    <>
      <Steps>
        <h2>Complete your order</h2>
        {steps.map((text, index) => (
          <StepComponent key={index} number={index + 1} title={text} />
        ))}
      </Steps>
      <FormSection></FormSection>
    </>
  );
}
export default Cart;

const Steps = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 50px;
  width: 40%;
  gap: 20px;

  @media (min-width: 320px) and (max-width: 599px) {
    margin-bottom: 50px;
    display: flex;
    gap: 15px;
    width: 100%;
  }

  h2 {
    align-self: center;
    font-size: 24px;
  }
`;

const FormSection = styled.section``;
