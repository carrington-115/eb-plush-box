import "../../app/design/home.css";
import { productImage } from "../../assets";
import { StepSection, TopHeader } from "../molecules";

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
    </section>
  );
}
export default Home;
