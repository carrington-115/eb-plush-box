import { useState } from "react";
import "../../app/design/contact.css";
import { contactCompPropsType } from "../../types/vartypes";
import { ContactComponent, StepSection } from "../molecules";
import { Accordion, Forms, Newsletter } from "../organisms";
import { Button } from "../atoms";
import { IoMdClose } from "react-icons/io";
import { productImage } from "../../assets";

const contacts: contactCompPropsType[] = [
  {
    name: "Customer Support",
    description:
      "Contact us if you want to learn more About our products and need more information",
  },
  {
    name: "Customer Support",
    description:
      "Contact us if you want to learn more About our products and need more information",
  },
  {
    name: "Customer Support",
    description:
      "Contact us if you want to learn more About our products and need more information",
  },
  {
    name: "Customer Support",
    description:
      "Contact us if you want to learn more About our products and need more information",
  },
];

function Contact() {
  const [showContactForm, setShowContactForm] = useState<boolean>(false);

  return (
    <section className="page-container">
      <section
        className={
          showContactForm ? "contact-section-active" : "contact-section"
        }
      >
        <section
          className={showContactForm ? "contact-grid-active" : "contact-grid"}
        >
          {contacts.map(
            ({ name, description }: contactCompPropsType, index) => (
              <ContactComponent
                key={index}
                name={name}
                description={description}
                btnAction={() => setShowContactForm(true)}
              />
            )
          )}
        </section>
        {showContactForm && (
          <section className="form-section">
            <Button
              text={false}
              icon={true}
              iconLink={
                <IoMdClose
                  fill="rgba(67, 31, 23, 1)"
                  style={{ width: "24px", height: "24px" }}
                />
              }
              btnAction={() => setShowContactForm(false)}
              color="rgba(67, 31, 23, 1)"
              bgColor="rgba(234, 215, 211, 1)"
              status="fill"
            />
            <Forms
              type="contact"
              submitAction={() => console.log("submit form")}
            />
          </section>
        )}
      </section>
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
        bgColor="#cfb7b2"
      />
      <Accordion />
      <Newsletter />
    </section>
  );
}
export default Contact;
