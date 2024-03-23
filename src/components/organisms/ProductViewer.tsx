import { ProductSlider } from "../molecules";
import { IoClose } from "react-icons/io5";
import { Button, ProductDetails } from "../atoms";
import { productViewerType } from "../../types/vartypes";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import "../../app/design/viewer.css";

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
    <section className={display ? "container-normal" : "container-nothing"}>
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
    </section>
  );
}
export default ProductViewer;
