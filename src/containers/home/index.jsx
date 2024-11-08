import { Animate } from "react-simple-animate";
import {useNavigate} from 'react-router-dom';
import {
  
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./style.scss";

function Home() {
  const navigate = useNavigate()

  const handleView = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/resume.pdf`; 
    link.target = '_blank'; 
    link.click();
  };


  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Eniola.
          <br />
          Front End Developer
        </h1>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateY(600px)",
          }}
          end={{ transform: "translateX(0px)" }}
        >
          {" "}
          <button onClick={()=>navigate('/contact')}>Hire Me</button>
          <button  onClick={handleView}>Download CV or Resume</button>
        </Animate>

        {/* Social Media Icons Section */}
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateY(600px)",
            }}
            end={{ transform: "translateX(0px)" }}
          >
          <div className="social">
            {/* <h3>Connect with me</h3> */}
            <div className="social_icons">
              <a 
 
                href="https://linkedin.com/in/badmus-eniola-236370253"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={45} color="#ffdd40" />
              </a>
              <a
                href="https://github.com/somod-gif"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={45} color="#ffdd40" />
              </a>
              <a
                href="https://x.com/BadmusEniola07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={45} color="#ffdd40" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100081125073849"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={45} color="#ffdd40" />
              </a>
              <a
                href="https://instagram.com/badmus_eniola07"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={45} color="#ffdd40" />
              </a>
              <a
                href="https://wa.me/+2348146438621"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={45} color="#ffdd40" />
              </a>
            </div>
          </div>
          </Animate>
      </div>
    </section>
  );
}

export default Home;
