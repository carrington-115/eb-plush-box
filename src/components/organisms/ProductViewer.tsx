import styled from "styled-components";
import { ProductSlider } from "../molecules";
import { IoClose } from "react-icons/io5";
import { Button, ProductDetails } from "../atoms";
import { productViewerType } from "../../types/vartypes";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

function ProductViewer({
  display,
  sliderImages,
  listDetails,
  productPrice,
  title,
  description,
  closeAction,
}: productViewerType) {
  const [btnClicked, setBtnClicked] = useState<boolean>(false);
  function handleWhenClick() {
    if (btnClicked !== true) {
      setBtnClicked(true);
    }
  }

  return (
    <Container style={{ display: display ? "flex" : "none" }}>
      <div className="header">
        <span className="close-btn" onClick={closeAction}>
          <IoClose />
        </span>
      </div>
      <ProductSlider sliderContent={sliderImages} />
      <div className="product-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <ProductDetails listContent={listDetails} />
      <section className="component-footer">
        <p className="product-price">$ {productPrice}</p>
        <Button
          text={true}
          icon={true}
          name={btnClicked ? "Proceed to order" : "Added to cart"}
          iconLink={
            btnClicked ? (
              <IoArrowForward fill="white" width="24px" height="24px" />
            ) : (
              <p style={{ fontSize: "20px", color: "white" }}>+</p>
            )
          }
          btnAction={handleWhenClick}
          status="fill"
          bgColor="rgba(67, 31, 23, 1)"
          color="white"
        />
      </section>
    </Container>
  );
}
export default ProductViewer;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 50px 40px;
  gap: 25px;
  border-radius: 40.332px;
  background: #cfb7b2;
  position: absolute;
  right: 20px;
  top: 0;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 30px 40px;
  }
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
      @media (min-width: 320px) and (max-width: 599px) {
        padding: 5px 10px;
      }
      &:hover {
        background-color: rgba(101, 57, 48, 0.15);
      }
      svg {
        width: 36px;
        height: 36px;
        fill: rgba(101, 57, 48, 1);
        @media (min-width: 320px) and (max-width: 599px) {
          width: 24px;
        }
      }
    }
  }
  .component-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .product-price {
      font-size: 21.531px;
      font-style: normal;
      font-weight: 700;
      color: rgba(67, 31, 23, 1);
    }
  }
`;
