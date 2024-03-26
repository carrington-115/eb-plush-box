import styled from "styled-components";
import { Button, LoginDefSection } from "../atoms";
import { Forms } from "../organisms";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="left">
        <LoginDefSection
          btnText="Login instead?"
          btnAction={() => navigate("/login")}
          title="Sign up to"
        />
      </div>
      <div className="right">
        <Forms
          type="signUp"
          submitAction={() => console.log("user has signed up")}
        />
        <div className="action-btn">
          <Button
            text={true}
            icon={false}
            name="Login instead?"
            status="text"
            btnAction={() => navigate("/")}
            color=""
            bgColor="rgba(67, 31, 23, 1)"
          />
        </div>
      </div>
    </Container>
  );
}
export default Signup;

const Container = styled.div`
  width: 100%;
  display: flex;
  .right {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 100px 0px;
    overflow-y: scroll;
    width: 50%;
    height: 100vh;
    @media (min-width: 320px) and (max-width: 599px) {
      width: 100%;
      background-color: white;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }
    .action-btn {
      margin-top: 10px;
      @media (min-width: 600px) {
        display: none;
      }
    }
  }

  .left {
    width: 50%;
    height: 100vh;

    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
  }
`;
