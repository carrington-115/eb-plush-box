import "../../app/design/home.css";
import {
  productFour,
  productImage,
  productOne,
  productThree,
  productTwo,
} from "../../assets";
import { productType } from "../../types/vartypes";
import { ProductComponent, StepSection, TopHeader } from "../molecules";
import { ProductGridSection } from "../organisms";

const products: productType[] = [
  {
    imageUrl: productOne,
    productName: "Wedding gift",
    price: 100,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productTwo,
    productName: "Valentine gift",
    price: 50,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productThree,
    productName: "Thanksgiving gift",
    price: 100,
    likeStatus: false,
    likes: 0,
  },
  {
    imageUrl: productFour,
    productName: "Couples gift",
    price: 100,
    likeStatus: false,
    likes: 0,
  },
];

function Home() {
  return (
    <section className="page-container">
      <TopHeader />
      <StepSection
        title="How to get the Perfect gift  "
        image={productImage}
        steps={[
          "Sign in or Create your Account on the Platform",
          "Proceed to the Shop page and select the gift you want",
          " Add the gift to the cart and proceed to check out",
          "You can then complete your order with payment and wait for you gift",
        ]}
        btnName="Get started"
        bgColor="transparent"
      />
      <section className="product-section">
        <ProductGridSection rightBarActive={false}>
          {products.map(
            ({
              imageUrl,
              productName,
              price,
              likeStatus,
              likes,
            }: productType) => (
              <ProductComponent
                imageUrl={imageUrl}
                productName={productName}
                price={price}
                likeStatus={likeStatus}
                likes={likes}
              />
            )
          )}
        </ProductGridSection>
      </section>
    </section>
  );
}
export default Home;
