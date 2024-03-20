import styled from "styled-components";
import { halfLogo } from "../../assets";
import { Button } from ".";

interface loginDefSectionPropsType {
  title: string;
  btnText: string;
  btnAction: () => void;
}

function LoginDefSection({
  title,
  btnText,
  btnAction,
}: loginDefSectionPropsType) {
  return (
    <Container>
      <div className="logo">
        <img src={halfLogo} alt="half main logo" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <h1>EB Plush Box</h1>
        <Button
          text={true}
          icon={false}
          name={btnText}
          status="fill"
          color="white"
          bgColor="rgba(67, 31, 23, 1)"
          btnAction={btnAction}
        />
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
