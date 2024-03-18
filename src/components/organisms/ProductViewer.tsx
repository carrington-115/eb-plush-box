import styled from "styled-components";
import { sliderImage } from "../../assets";
import { ProductSlider } from "../molecules";
import { IoClose } from "react-icons/io5";
import { ProductDetails } from "../atoms";

function ProductViewer({ display }: { display: boolean }) {
  return (
    <Container style={{ display: display ? "flex" : "none" }}>
      <div className="header">
        <span className="close-btn">
          <IoClose />
        </span>
      </div>
      <ProductSlider sliderContent={[sliderImage, sliderImage]} />
      <ProductDetails
        listContent={[
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
        ]}
      />
    </Container>
  );
}
export default ProductViewer;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  padding: 50px 40px;
  margin: 2cm;
  gap: 25px;
  background-color: rgba(244, 233, 218, 1);
  border-radius: 36px;
  .header {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .close-btn {
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border-radius: 50%;

      &:hover {
        background-color: rgba(101, 57, 48, 0.15);
      }
      svg {
        width: 36px;
        height: 36px;
        fill: rgba(101, 57, 48, 1);
      }
    }
  }
`;
