import styled from "styled-components";
import { LoginDefSection } from "../atoms";

function Signup() {
  return (
    <Container>
      <div className="left">
        <LoginDefSection text="Sign up to" />
      </div>
      <div className="right"></div>
    </Container>
  );
}
export default Signup;

const Container = styled.div`
  width: 100%;
  display: flex;
  .left,
  .right {
    width: 50%;
  }
`;
