import styled from "styled-components";
import { accordionType } from "../../types/vartypes";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function AccordionElement({ title, message }: accordionType) {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  return (
    <Container>
      <div className="top">
        <h2 className="accordion-title">{title}</h2>
        <span
          onClick={() => setShowMessage(!showMessage)}
          className="drop-down-icon"
        >
          <IoIosArrowDown />
        </span>
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
  .top {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .accordion-title {
    }
    .drop-down-icon {
    }
  }
  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
    }
  }
`;
