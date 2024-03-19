import styled from "styled-components";
import { accordionType } from "../../types/vartypes";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function AccordionElement({ title, message }: accordionType) {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  return (
    <Container>
      <div className="top" onClick={() => setShowMessage(!showMessage)}>
        <span
          onClick={() => setShowMessage(!showMessage)}
          className="drop-down-icon"
          style={{
            transform: showMessage ? "rotateX(180deg)" : "rotateX(0)",
            backgroundColor: showMessage
              ? "rgba(238, 238, 238, 1)"
              : "transparent",
          }}
        >
          <IoIosArrowDown />
        </span>
        <h2 className="accordion-title">{title}</h2>
      </div>
      {showMessage && (
        <div className="bottom">
          <p>{message}</p>
        </div>
      )}
    </Container>
  );
}
export default AccordionElement;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border-radius: 10px;
  border: 1px solid #161616;
  margin-bottom: 2cm;
  padding: 10px 20px;
  cursor: pointer;
  width: 50%;
  gap: 20px;
  transition: height width transform 1s 250ms ease;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 90%;
  }
  .top {
    display: inherit;
    align-items: center;
    gap: 20px;
    transition: height transform 1s 250ms ease;

    .accordion-title {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 20px;
      }
    }
    .drop-down-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px;
      border-radius: 50%;
      transition: height transform 1s 250ms ease;

      &:hover {
        background-color: rgba(238, 238, 238, 1);
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    p {
      text-align: justify;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
    }
  }
`;
