import React from "react";
import "./style.css";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  FaDev,
  FaDatabase,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa"; 
import { DiAndroid, DiApple } from "react-icons/di";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Animate } from "react-simple-animate";

const personalDetails = [
  {
    label: "Name",
    value: "Badmus Eniola",
  },
  {
    label: "Address",
    value: "Nigeria",
  },
  {
    label: "Email",
    value: "somodbadmus@gmail.com",
  },
  {
    label: "Contact No",
    value: "+234 8146438621",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="developerContent">Front End Developer</h3>
            <p>
              Seasoned and independent Front End Developer with 3 years of
              experience in blending the art of design with skill of programming
              to deliver an immersive and engaging user experience through
              efficient website development, proactive feature optimization, and
              relentless debugging...
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalDetails.map((item) => (
                <li key={item.label}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>


          {/* Social Media Icons Section */}
          
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple color="#ffdd40" size={60} />
              </div>
              <div>
                <FaDev color="#ffdd40" size={60} />
              </div>
              <div>
                <FaDatabase color="#ffdd40" size={60} />
              </div>
              <div>
                <DiAndroid color="#ffdd40" size={60} />
              </div>
            </div>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(600px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
          <div className="about__content__socialIconsWrapper">
            <h3>Connect with me</h3>
            <div className="social-icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={45} color="#0077b5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={45} color="#333" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={45} color="#1DA1F2" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={45} color="#4267B2" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={45} color="#E1306C" />
              </a>
              <a
                href="https://wa.me/+2348146438621"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={45} color="#25D366" />
              </a>
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
