import { ReactNode } from "react";
import styled from "styled-components";

function ProductGridSection({
  rightBarActive,
  children,
}: {
  rightBarActive: boolean;
  children: ReactNode;
}) {
  return (
    <Container>
      <div className={rightBarActive ? "grid-resize" : "inner-grid"}>
        {children}
      </div>
    </Container>
  );
}
export default ProductGridSection;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .inner-grid,
  .grid-resize {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    @media (min-width: 320px) and (max-width: 599px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
  .grid-resize {
    grid-template-columns: repeat(2, 1fr);
    padding-left: 100px;
    @media (min-width: 320px) and (max-width: 599px) {
      padding-left: 0;
    }
  }
`;
