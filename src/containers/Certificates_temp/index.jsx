import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { FaCertificate } from "react-icons/fa";
import "./style.scss";
import UdemyReactandNextJS from "../../images/Udemy ReactJs Certificates.jpg";

const certificatesData = [
  {
    certificateName: "Udemy ReactJS and NextJS Certificate",
    certificateLink: "https://udemy-certificate.s3.amazonaws.com/image/UC-f050d43c-f2ee-46a9-bdcb-228f34025710.jpg",
    image: UdemyReactandNextJS,
  },
  // Add more certificates as needed
];

function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Fixed useState syntax

  return (
    <section id="certificates" className="certificates">
      <PageHeaderContent
        headerText="My Certificates"
        icon={<FaCertificate size={40} />}
      />
      <div className="certificates__content">
        <div className="certificates__content__cards">
          {certificatesData.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="certificates__content__cards__item"
            >
              <div className="certificates__content__cards__item__img-wrapper">
                <a href={item.certificateLink} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.certificateName} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.certificateName}</p>
                    <button onClick={() => window.open(item.certificateLink, "_blank")}>
                      View Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
