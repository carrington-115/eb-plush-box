import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";

function ProductGridSection({
  rightBarActive,
  children,
}: {
  rightBarActive: boolean;
  children: ReactNode;
}) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () =>
      setIsSmallScreen(window.matchMedia("(max-width: 599px)").matches)
    );
  }, [isSmallScreen]);

  return (
    <Container>
      <div
        className="inner-grid"
        style={{
          gridTemplateColumns:
            rightBarActive || isSmallScreen
              ? "repeat(2, 1fr)"
              : "repeat(4, 1fr)",
        }}
      >
        {children}
      </div>
    </Container>
  );
}
export default ProductGridSection;

const Container = styled.section`
  margin: 60px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  .inner-grid {
    display: grid;
    grid-gap: 20px;
    @media (min-width: 320px) and (max-width: 599px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10px;
    }
  }
`;
