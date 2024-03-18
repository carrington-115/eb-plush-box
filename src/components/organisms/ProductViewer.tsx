import styled from "styled-components";
import { sliderImage } from "../../assets";
import { ProductSlider } from "../molecules";

function ProductViewer() {
  return (
    <Container>
      <ProductSlider sliderContent={[sliderImage, sliderImage]} />
    </Container>
  );
}
export default ProductViewer;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
