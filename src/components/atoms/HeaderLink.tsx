import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { headerLinkType } from "../../types/vartypes";

function HeaderLink({ url, name, icon, iconLink }: headerLinkType) {
  return (
    <Container to={url}>
      <p>{name}</p>
      {icon && <span>{iconLink}</span>}
    </Container>
  );
}
export default HeaderLink;

const Container = styled(NavLink)`
  display: flex;
  align-items: center;
`;
