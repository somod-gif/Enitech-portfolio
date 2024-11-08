import React from "react";
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from "../../components/PageHeaderContent";
import { Line } from "rc-progress";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import './style.scss';  

const data = [
  {
    label: "FRONT END BASICS",
    data: [
      {
        skillName: "HTML",
        percentage: "95",
      },
      {
        skillName: "CSS",
        percentage: "95",
      },
      {
        skillName: "JAVASCRIPT",
        percentage: "90",
      },
      
    ],
  },
  {
    label: "FRAMEWORKS AND LIBRARY",
    data: [
      {
        skillName: "REACT JS",
        percentage: "90",
      },
      {
        skillName: "NEXT JS",
        percentage: "90",
      },
      {
        skillName: "TAILWINDCSS",
        percentage: "75",
      },
      {
        skillName: "BOOTSTRAP",
        percentage: "85",
      },
      {
        skillName: "SASS",
        percentage: "85",
      },
      {
        skillName: "FIREBASE",
        percentage: "65",
      },
      
    ],
  },
  {
    label: "OTHER FRONTEND TECHNOLOGIES ",
    data: [
      {
        skillName: "GIT/GITHUB",
        percentage: "95",
      },
      {
        skillName: "REDUX",
        percentage: "78",
      },
      
    ],
  },
];

const skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent 
      headerText="My Skills"
       icon={<GiSkills size={40} 
       />} />
<h3 className="h3">FRONTEND SKILLS AND TECHNOLOGIES </h3>
<div className="skills__content-wrapper">
        
        {data.map((item) => (
          <div
            className="skills__content-wrapper__inner-content"
            key={item.label}
          >
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{ transform: "translateX(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div>
                {item.data.map((skill) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity: 1", "opacity: 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={skill.skillName}>
                      <p>{skill.skillName}</p>
                      <Line
                        percent={skill.percentage}
                        strokeWidth="2"
                        strokeColor="#ffdd40"
                        strokeLinecap="square"
                        trailWidth="2"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default skills;
