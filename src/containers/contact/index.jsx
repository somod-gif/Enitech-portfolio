import React, { useRef } from "react";
// import emailjs from "emailjs-com";
import PageHeaderContent from "../../components/PageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import { Animate } from "react-simple-animate";
import './style.css';

function Contact() {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  //       "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  //       form.current,
  //       "YOUR_USER_ID" // Replace with your public key
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         alert("Message sent successfully!");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //         alert("Failed to send the message, please try again.");
  //       }
  //     );
    
  //   e.target.reset(); // Reset the form after submission
  // };

  return (
    <section className="contact" id="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          <form ref={form}  className="contact__content__form">
            <div className="contact__content__form__controlsWrapper">
              <div className="nameWrapper">
                <input name="name" className="inputName" type="text" required />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div className="emailWrapper">
                <input name="email" className="inputEmail" type="email" required />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div className="descriptionWrapper">
                <textarea
                  name="message"
                  className="inputDescription"
                  type="text"
                  rows="5"
                  style={{ resize: "none" }}
                  required
                />
                <label htmlFor="description" className="descriptionLabel">
                  Message
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
