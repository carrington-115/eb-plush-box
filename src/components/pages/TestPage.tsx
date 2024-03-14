import styled from "styled-components";
import { Header, StepSection } from "../molecules";

function TestPage() {
  return (
    <Container>
      <Header />
      <StepSection
        title="How to order a Gift box"
        steps={[
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        ]}
      />
    </Container>
  );
}
export default TestPage;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #fbf7f6;
  display: flex;
  flex-direction: column;
`;
