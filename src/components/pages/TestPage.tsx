import styled from "styled-components";
import { Header, ProductComponent, StepSection, TopHeader } from "../molecules";
import { productOne } from "../../assets";

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
`;
