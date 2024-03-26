import styled from "styled-components";
import { stepCompPropsType } from "../../types/vartypes";

function StepComponent({ number, title }: stepCompPropsType) {
  return (
    <Container>
      <span>
        <p>{number}</p>
      </span>
      <p>{title}</p>
    </Container>
  );
}
export default StepComponent;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 20px;
  width: 100%;
  @media (min-width: 320px) and (max-width: 599px) {
    font-size: 16px;
  }
  span {
    padding: 5px 12px;
    border-radius: 20px;
    background-color: rgba(101, 57, 48, 1);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    @media (min-width: 320px) and (max-width: 599px) {
      font-size: 18px;
    }
  }
`;
