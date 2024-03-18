import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

function ProductDetails({ listContent }: { listContent: string[] }) {
  const [showList, setShowList] = useState<boolean>(false);
  return (
    <Container>
      <div onClick={() => setShowList(!showList)} className="top-heading">
        <span
          onClick={() => setShowList(!showList)}
          style={{
            transform: showList ? "rotateZ(90deg)" : "rotateZ(0)",
            transition: "tranform 1s 250ms ease-in-out",
          }}
          className="icon"
        >
          <IoIosArrowForward />
        </span>
        <h2>Gift Details</h2>
      </div>
      {showList && (
        <ol>
          {listContent.map((element, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              <p>{element}</p>
            </li>
          ))}
        </ol>
      )}
    </Container>
  );
}
export default ProductDetails;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  .top-heading {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(101, 57, 48, 1);
    .icon {
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      &:hover {
        background-color: rgba(101, 57, 48, 0.15);
      }
      svg {
        fill: rgba(101, 57, 48, 1);
        width: 24px;
        height: 24px;
      }
    }
    h2 {
      font-size: 19.776px;
      font-style: normal;
      font-weight: 700;
    }
  }
  ol {
    li {
      list-style: none;
      display: flex;
      gap: 20px;
      color: rgba(101, 57, 48, 1);
      font-size: 20px;
      align-items: center;
      margin-bottom: 12px;
      span {
        padding: 5px;
        width: 24px;
        border-radius: 20px;
        color: white;
        background-color: rgba(101, 57, 48, 1);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      p {
        font-style: normal;
        font-weight: 400;
        line-height: 25.169px;
      }
    }
  }
`;
