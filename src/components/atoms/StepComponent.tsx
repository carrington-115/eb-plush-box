import styled from "styled-components";
import { stepCompPropsType } from "../../types/vartypes";

function StepComponent({ number, title }: stepCompPropsType) {
  return (
    <Container>
      <span>{number}</span>
      <p>{title}</p>
    </Container>
  );
}
export default StepComponent;

const Container = styled.div``;
