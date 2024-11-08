import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";
import { FaBlackTie } from "react-icons/fa"; 
import PageHeaderContent from "../../components/PageHeaderContent";
import './style.scss'
const data = {
  experience: [
    {
      title: "Frontend Intern",
      subTitle: "Pakistan",
      description:
        " User Experience, Visual Design",
        date: "2024 till present"
    },
    // {
    //   title: "Senior Consultant",
    //   subTitle: "London, UK",
    //   description:
    //     "Web development, Databases, Backend developement",
    // },
    // {
    //   title: "Project Manager",
    //   subTitle: "Bangalore, INDIA",
    //   description:
    //     "Creative Direction Project Management, Team Leading",
    // },
  ],
  education: [
    {
      title: "Primary School",
      subTitle: "M.A.N nursery and primary school",
      description:
        "Primary School",
        date: "2011 - 2015"
    },
    {
      title: "Secondary School",
      subTitle: "A.N.P.S.S",
      description:
        "12th Grade in Science",
        date: "2016 - 2022 "
    },
    {
      title: "B.Tech",
      subTitle: "Federal university of Technology Minna",
      description:
        "Bachelor of Technology in Information technology",
      date: "2022 till present",
    },
  ],
};

function Resume() {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<FaBlackTie size={40} />}
      />
      <div className="timeline">
         <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline layout="1-column" lineColor="#ffdd40">
            {data.experience.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "#fff",
                  border: "1.5px solid #ffdd40",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2011 - present"
                iconStyle={{ background: "#181818", color: "#ffdd40" }}
                icon={<MdWork />}
                dateClassName="vertical-timeline-element-custom-date"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline layout="1-column" lineColor="#ffdd40">
            {data.education.map((item) => (
              <VerticalTimelineElement
                key={item.title}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "#fff",
                  border: "1.5px solid #ffdd40",
                }}
                contentArrowStyle={{
                  // borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                // date="2022 - present"
                iconStyle={{ background: "#181818", color: "#ffdd40" }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.subTitle}
                  </h4>
                </div>
                <p>{item.description}</p>
                <p>{item.date}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Resume;
