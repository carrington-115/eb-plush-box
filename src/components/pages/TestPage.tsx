import styled from "styled-components";
import {
  Header,
  ProductComponent,
  StepSection,
  Testimonial,
  TopHeader,
} from "../molecules";
import { personOne, productOne } from "../../assets";
import { ProductGridSection } from "../organisms";
import { UserInput } from "../atoms";

function TestPage() {
  return (
    <Container>
      <Header />
      <TopHeader />
      <StepSection
        title="How to order a Gift box"
        steps={[
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        ]}
      />
      <div className="products-container">
        <ProductComponent
          imageUrl={productOne}
          productName="Product One"
          price={500}
          likeStatus={false}
          likes={200}
        />
      </div>
      <div>
        <Testimonial
          profileImage={personOne}
          testifierMessage={{
            name: "Testifer name",
            message:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ",
          }}
        />
      </div>
      <ProductGridSection rightBarActive={false}>
        <ProductComponent
          imageUrl={productOne}
          productName="Product One"
          price={500}
          likeStatus={false}
          likes={200}
        />
        <ProductComponent
          imageUrl={productOne}
          productName="Product One"
          price={500}
          likeStatus={false}
          likes={200}
        />
        <ProductComponent
          imageUrl={productOne}
          productName="Product One"
          price={500}
          likeStatus={false}
          likes={200}
        />
        <ProductComponent
          imageUrl={productOne}
          productName="Product One"
          price={500}
          likeStatus={false}
          likes={200}
        />
      </ProductGridSection>
      <div
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "rgba(67, 31, 23, 1)",
          padding: "40px 20px",
        }}
      >
        <UserInput
          type="simple"
          placeholder="Name"
          inputType="text"
          inputName="name"
        />
      </div>
    </Container>
  );
}
export default TestPage;

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #fbf7f6;
  display: flex;
  flex-direction: column;
  .products-container {
    width: 100%;
  }
`;
