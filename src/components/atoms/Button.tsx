import styled from "styled-components";
import { btnType } from "../../types/vartypes";

function Button({
  text,
  name,
  bgColor,
  btnAction,
  color,
  icon,
  iconLink,
  status,
  shadow,
}: btnType) {
  return (
    <Container
      onClick={btnAction}
      style={{
        backgroundColor: `${
          status === "fill"
            ? bgColor
            : status === "outlined"
            ? "transparent"
            : "transparent"
        }`,

        padding: `${
          status === "icon" ||
          (status === "fill" && icon && text === false && icon) ||
          (status === "outlined" && icon && text === false && icon)
            ? "24px"
            : "5px 12px"
        }`,
        color: `${
          status === "fill"
            ? color
            : status === "outlined"
            ? `${bgColor}`
            : color
        }`,
        gap: `${text && icon ? "12px" : "0px"}`,
        border: `${
          status === "fill"
            ? "1px solid transparent"
            : status === "outlined" || status === "icon"
            ? `${`1px solid ${bgColor}`}`
            : "1px solid transparent"
        }`,
        borderRadius: `${
          status === "fill" && icon === true && text === false
            ? "50%"
            : status === "outlined" && icon === true && text === false
            ? "50%"
            : "5px"
        }`,

        boxShadow: `${
          shadow &&
          "0px 1px 10px 0px rgba(0, 0, 0, 0.20), 1px 0px 10px 0px rgba(0, 0, 0, 0.20)"
        }`,
      }}
    >
      <p style={{ display: `${status === "icon" ? "none" : "block"}` }}>
        {text && name}
      </p>
      <span>{icon && iconLink}</span>
    </Container>
  );
}
export default Button;

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover {
    transform: scale(1.08, 1.08);
    transition: all 0.2 250ms ease-in-out;
  }
`;
