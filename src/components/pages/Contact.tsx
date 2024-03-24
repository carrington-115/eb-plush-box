import "../../app/design/contact.css";
import { contactCompPropsType } from "../../types/vartypes";
import { ContactComponent } from "../molecules";

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
  return (
    <section className="page-container">
      <section className="contact-section">
        <section className="contact-grid">
          {contacts.map(
            ({ name, description }: contactCompPropsType, index) => (
              <ContactComponent
                key={index}
                name={name}
                description={description}
              />
            )
          )}
        </section>
      </section>
    </section>
  );
}
export default Contact;
