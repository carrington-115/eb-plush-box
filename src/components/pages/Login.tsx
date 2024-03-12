import styled from "styled-components";
import { HeaderLink, LoginDefSection } from "../atoms";
import { IoIosArrowForward } from "react-icons/io";

function Login() {
  return (
    <Container>
      <div className="left">
        <LoginDefSection text="Login to" />
      </div>
      <div className="right">
        <div className="test"></div>
      </div>
    </Container>
  );
}
export default Login;

const Container = styled.div`
  width: 100%;
  display: flex;
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    .test {
      max-width: 100%;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      margin: 20px 0px;
      align-items: flex-start;
    }
  }

  .left,
  .right {
    width: 50%;
  }
`;
