import styled from "styled-components";
import { StepComponent } from "../atoms";
interface stepsType {
  steps: string[];
}
function Steps({ steps }: stepsType) {
  return (
    <Container>
      <h2>Follow the steps to complete your order</h2>
      {steps.map((text, index) => (
        <StepComponent key={index} number={index + 1} title={text} />
      ))}
    </Container>
  );
}
export default Steps;

const Container = styled.section`
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
