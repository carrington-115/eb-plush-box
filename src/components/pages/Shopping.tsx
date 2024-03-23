import { useEffect, useState } from "react";
import "../../app/design/shopping.css";
import { UserInput } from "../atoms";
import { ProductGridSection, ProductViewer } from "../organisms";
import { products } from "../data";
import { ProductComponent } from "../molecules";
import { productImage } from "../../assets";

function Shopping() {
  const [productViewerStatus, setProductViewerStatus] =
    useState<boolean>(false);

  const [viewerParameters, setViewerParameters] = useState({
    display: productViewerStatus,
    sliderImages: [productImage, productImage, productImage],
    price: 2000,
    title: "Gift product to order",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, providentquasi! Nobis, esse dolores ipsam beatae cupiditate maxime eius suscipitdebitis nulla eaque commodi veritatis amet sed rerum excepturi assumenda.",
    listDetails: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  });

  useEffect(() => {
    console.log(productViewerStatus);
  }, [productViewerStatus]);

  return (
    <div className="page-container">
      <div className="search-section">
        <UserInput type="search" inputName="search" />
      </div>
      <section
        className={
          productViewerStatus
            ? "products-section-active"
            : "products-section-normal"
        }
      >
        <ProductGridSection rightBarActive={productViewerStatus}>
          {products.map(
            ({ imageUrl, productName, price, likeStatus, likes }, index) => (
              <ProductComponent
                productAction={() => setProductViewerStatus(true)}
                key={index}
                imageUrl={imageUrl}
                productName={productName}
                likes={likes}
                likeStatus={likeStatus}
                price={price}
              />
            )
          )}
        </ProductGridSection>
        {productViewerStatus && (
          <ProductViewer
            display={true}
            productPrice={viewerParameters.price}
            sliderImages={viewerParameters.sliderImages}
            title={viewerParameters.title}
            description={viewerParameters.description}
            listDetails={viewerParameters.listDetails}
            closeAction={() => setProductViewerStatus(false)}
          />
        )}
      </section>
    </div>
  );
}
export default Shopping;
