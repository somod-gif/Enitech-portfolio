import React, { useState } from "react";
import PageHeaderContent from "../../components/PageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import "./style.scss";
import portfolio from "../../images/personal-portfolio.png";
import spacextracker from "../../images/Spacex tracking laucher.png"


const portfolioData = [
  {
    
    projectName: "Personal Portfolio",
    projectLink: "https://enitech-portfolio.vercel.app/portfolio",
    image: portfolio,
  },
  {
    
    projectName: "SpaceX Tracking Laucher",
    projectLink: "https://spacextrackinglauncher.vercel.app/",
    image: spacextracker,
  },
  {
    
    projectName: "Theme App",
    projectLink: "",
    // image: ImageThree,
  },
  {
    sectionId: 3,
    projectName: "Supplier Design App",
    projectLink: "",
    // image: ImageFour,
  },
  {
    sectionId: 3,
    projectName: "TO DO List",
    projectLink: "",
    // image: ImageFive,
  },
  // {
  //   
  //   projectName: "Notes Application",
  //   projectLink: "",
  //   // image: ImageSeven,
  // },
  // {
  //   sectionId: 3,
  //   projectName: "ToDo Application",
  //   projectLink: "",
  //   // image: ImageSix,
  // },
  
];

// const filteroptions = [
//   {
//     label: "All",
//     id: 1,
//   },
//   {
//     label: "Development",
//     id: 2,
//   },
//   {
//     label: "Design",
//     id: 3,
//   },
// ];

function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filterValue, setFiltervalue] = useState(1);

  const updatedPortFolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        {/* <ul className="portfolio__content__filter">
          {filteroptions.map((option) => (
            <li className={option.id === filterValue && 'active'} onClick={() => setFiltervalue(option.id)} key={option.id}>
              {option.label}
            </li>
          ))}
        </ul> */}
        <div className="portfolio__content__cards">
          {updatedPortFolioData.map((item, index) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredIndex && (
                  <div>
                    <p>{item.projectName}</p>
                    <button>Visit</button>
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

export default Portfolio;
