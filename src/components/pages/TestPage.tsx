import styled from "styled-components";
import {
  AccordionElement,
  CartElement,
  Header,
  ProductComponent,
  StepSection,
  Testimonial,
  TopHeader,
} from "../molecules";
import { personOne, productOne, sliderImage } from "../../assets";
import { ProductGridSection, ProductViewer } from "../organisms";
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
          gap: "30px",
        }}
      >
        <UserInput
          type="simple"
          placeholder="Name"
          inputType="text"
          inputName="name"
        />
        <UserInput type="multiline" placeholder="Message" inputName="message" />
        <UserInput type="search" placeholder="Search" inputName="search" />
        <UserInput type="checkbox" placeholder="Python" inputName="Python" />
        <UserInput
          type="dropdown"
          inputName="countries-dropdown"
          dropDown={{
            dropDownName: "Countries",
            dropDownValues: ["Cameroon", "Nigeria", "Congo"],
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <AccordionElement
          title="Lorem ipsum dolor sit amet consectetur?"
          message="adipisicing elit. Aut, culpa! Ab quisquam repellat molestias sit sunt, quo
                  suscipit corporis ipsa debitis! Exercitationem labore saepe pariatur
                  voluptates rem fugiat quam atque."
        />
      </div>
      <ProductViewer
        display={true}
        title="Product One"
        description="adipisicing elit. Aut, culpa! Ab quisquam repellat molestias sit sunt, quo
                  suscipit corporis ipsa debitis! Exercitationem labore saepe pariatur
                  voluptates rem fugiat quam atque."
        listDetails={[
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
          "Lorem ipsum dolor sit amet consectetur",
        ]}
        productPrice={500}
        sliderImages={[sliderImage, sliderImage, sliderImage]}
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <CartElement
          productImage={productOne}
          productName="Product one new product"
          productPrice={500}
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
