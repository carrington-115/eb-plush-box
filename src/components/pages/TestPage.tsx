import styled from "styled-components";
import { Header } from "../molecules";

function TestPage() {
  return (
    <Container>
      <Header />
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
