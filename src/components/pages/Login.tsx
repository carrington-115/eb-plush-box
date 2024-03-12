import styled from "styled-components";
import { LoginDefSection } from "../atoms";

function Login() {
  return (
    <Container>
      <div className="left">
        <LoginDefSection text="Login to" />
      </div>
      <div className="right"></div>
    </Container>
  );
}
export default Login;

const Container = styled.div`
  width: 100%;
  display: flex;
  .left,
  .right {
    width: 50%;
  }
`;
