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
        <span className="close-btn">
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
