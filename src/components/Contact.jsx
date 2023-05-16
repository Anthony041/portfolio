import linkedin from "../assets/linkedin.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <a href="https://www.linkedin.com/in/anthony-l1">
        <img src={linkedin} alt="LinkedIn logo" />
      </a>
    </section>
  );
}

export default Contact;
