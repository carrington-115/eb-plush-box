import styled from "styled-components";
import { Forms } from "../organisms";
import { Steps } from "../molecules";

function Checkout() {
  return (
    <>
      <Steps
        steps={[
          "Thank you for choosing EB Plush for your shopping needs! We appreciate your support and trust in us. Happy shopping, and we hope you enjoy your purchases! If you have any questions or need assistance, feel free to reach out to our customer support team. Thank you again for shopping with us!",
          "Proceed by filling the form to complete your order",
        ]}
      />
      <FormSection>
        <Forms
          type="checkout"
          submitAction={() => console.log("review form submitted")}
        />
      </FormSection>
    </>
  );
}
export default Checkout;

const FormSection = styled.section`
  width: 50%;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 100%;
    order: 1;
  }
`;
