import styled from "styled-components";
import { halfLogo } from "../../assets";

function LoginDefSection({ text }: { text: string }) {
  return (
    <Container>
      <div className="logo">
        <img src={halfLogo} alt="half main logo" />
      </div>
      <div className="content">
        <h3>{text}</h3>
        <h1>EB Plush Box</h1>
      </div>
    </Container>
  );
}
export default LoginDefSection;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #cfb7b2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #431f17;
    h3 {
      font-size: 24px;
    }
    h1 {
      font-family: Sofia;
      font-size: 48px;
    }
  }
`;
