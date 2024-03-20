import styled from "styled-components";
import { thirdPartyBtnPropsType } from "../../types/vartypes";

function ThirdPartySignIn({ icon, name, btnAction }: thirdPartyBtnPropsType) {
  return (
    <Container onClick={btnAction}>
      <span className="btn-icon">{icon}</span>
      <p className="btn-name">{name}</p>
    </Container>
  );
}
export default ThirdPartySignIn;

const Container = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid #431f17;
  background: rgba(67, 31, 23, 0.1);
  cursor: pointer;
  &:hover {
    background: rgba(67, 31, 23, 0.2);
  }
  gap: 12px;
  .btn-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: #431f17;
      width: 24px;
      height: 24px;
    }
  }
  .btn-name {
    color: #431f17;
    font-family: "El Messiri";
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 24px;
  }
`;
