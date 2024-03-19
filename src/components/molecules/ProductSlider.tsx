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
  width: 100%;

  @media (min-width: 320px) and (max-width: 599px) {
    width: 100%;
  }
  .slick-arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    fill: black;
    background-color: rgba(207, 183, 178, 1);
    width: auto;
    height: auto;
    border-radius: 50%;
    &:hover {
      background-color: rgba(141, 104, 97, 1);
    }
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
    font-size: 16px;
  }
  .slick-next {
    right: -30px;
  }
  .slick-prev {
    left: -30px;
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
