import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { headerLinkType } from "../../types/vartypes";

function HeaderLink({ url, name, icon, iconLink }: headerLinkType) {
  return (
    <Container
      style={{
        gap: icon ? "12px" : "0px",
      }}
      to={url}
    >
      <p>{name}</p>
      {icon && <span>{iconLink}</span>}
    </Container>
  );
}
export default HeaderLink;

const Container = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 12px;
  font-size: 20px;
  border-radius: 5px;
  color: rgba(20, 14, 7, 1);
  text-decoration: none;
  span {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    background-color: rgba(250, 244, 237, 1);
  }
`;
