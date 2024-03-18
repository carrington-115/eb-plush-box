import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderType } from "../../types/vartypes";
import Slider from "react-slick";

const settings: sliderType = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 1,
  lazyload: true,
};

function ProductSlider({ sliderContent }: { sliderContent: string[] }) {
  return (
    <Container {...settings}>
      {sliderContent.map((element, index) => (
        <div className="slider-image" key={index}>
          <img src={element} alt="slider image" />
        </div>
      ))}
    </Container>
  );
}
export default ProductSlider;

const Container = styled(Slider)`
  width: 45%;
  button,
  .slick-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    fill: black;
    background-color: rgba(244, 233, 218, 1);
    width: auto;
    height: auto;
    border-radius: 50%;
  }
  .slick-prev,
  .slick-next {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
  .slick-next::before,
  .slick-prev::before {
    font-size: 36px;
  }
  .slick-next {
    right: -50px;
  }
  .slick-prev {
    left: -50px;
  }

  .slider-image {
    display: flex;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
