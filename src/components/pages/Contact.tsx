import { useState } from "react";
import "../../app/design/contact.css";
import { contactCompPropsType } from "../../types/vartypes";
import { ContactComponent } from "../molecules";
import { Forms } from "../organisms";
import { Button } from "../atoms";
import { IoMdClose } from "react-icons/io";

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
    </section>
  );
}
export default Contact;
