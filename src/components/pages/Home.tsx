import { useNavigate } from "react-router-dom";
import "../../app/design/home.css";
import {
  mockupImage,
  productFour,
  productImage,
  productOne,
  productThree,
  productTwo,
} from "../../assets";
import { productType } from "../../types/vartypes";
import { Button } from "../atoms";
import { ProductComponent, StepSection, TopHeader } from "../molecules";
import { ProductGridSection, Testimonials } from "../organisms";
import { IoArrowForward } from "react-icons/io5";

const products: productType[] = [
  {
    imageUrl: productOne,
    productName: "Wedding gift",
    price: 100,
    likeStatus: false,
    likes: 100,
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
  const navigate = useNavigate();
  return (
    <section className="page-container">
      <TopHeader />
      <StepSection
        title="How to get the Perfect gift  "
        image={productImage}
        steps={[
          "Sign in or Create your Account on the Platform",
          "Proceed to the Shop page and select the gift you want",
          "Add the gift to the cart and proceed to check out",
          "You can then complete your order with payment and wait for you gift",
        ]}
        btnName="Get started"
        bgColor="transparent"
      />
      <section className="product-section">
        <h1>Our popular Gifts</h1>
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
        <div className="btn-action">
          <Button
            text={true}
            icon={true}
            name="Continue shopping"
            iconLink={<IoArrowForward fill="rgba(255, 255, 255, 1)" />}
            status="fill"
            color="rgba(255, 255, 255, 1)"
            bgColor="rgba(67, 31, 23, 1)"
            btnAction={() => navigate("/shopping")}
          />
        </div>
      </section>
      <StepSection
        title="Our Products and Services"
        image={mockupImage}
        steps={[
          "We curate the best Gift Collection for you",
          "We bring to our customers Customizable Gift Collections",
          "Gift Cards and E-Gifts",
          "Gifts Subscription Boxes",
          "Fast and Stress-free Gift delivery",
        ]}
        btnName="Get started"
        bgColor="rgba(207, 183, 178, 1)"
      />
      <Testimonials />
    </section>
  );
}
export default Home;
