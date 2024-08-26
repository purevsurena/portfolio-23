import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experienceData from "../../assets/experience.json";

// Helper function to merge experiences for the same company
const mergeExperiences = (experiences) => {
  const merged = experiences.reduce((acc, exp) => {
    const existingCompany = acc.find((item) => item.company === exp.company);
    if (existingCompany) {
      existingCompany.positions.push({
        title: exp.title,
        info: exp.info,
        stack: exp.stack,
      });
    } else {
      acc.push({
        ...exp,
        positions: [
          {
            title: exp.title,
            dateFrom: exp.dateFrom,
            dateTo: exp.dateTo,
            info: exp.info,
            stack: exp.stack,
          },
        ],
      });
    }
    return acc;
  }, []);
  return merged;
};

const Experience = () => {
  const mergedExperiences = mergeExperiences(experienceData.experience);

  return (
    <>
      <div className="container">
        <VerticalTimeline layout="1-column">
          {mergedExperiences?.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              date={`${exp.dateFrom} - ${exp.dateTo}`}
              contentStyle={{
                background: "#1b1b1b",
                color: "#fff",
                paddingTop: 36,
                paddingLeft: 42,
                paddingRight: 42,
                marginLeft: 86,
                marginTop: 64,
                borderRadius: 8,
                // cursor: "pointer", // Adds pointer cursor on hover
              }}
              contentArrowStyle={{
                borderRight: "15px solid  #272829",
                marginTop: 8,
              }}
              iconStyle={{
                background: "#1AAFD0",
                color: "#fff",
                width: 56,
                height: 56,
              }}
              icon={
                <img
                  src={require(`../../../public/assets/img/company/${exp?.company
                    .replace(/ /g, "")
                    .toLowerCase()}.png`)}
                  alt={`${exp.company}-logo`}
                  style={{
                    width:
                      exp.company === "equipe" || exp.company === "pikd"
                        ? "100%"
                        : "80%",
                    height:
                      exp.company === "equipe" || exp.company === "pikd"
                        ? "100%"
                        : "80%",
                    borderRadius: "50%",
                    margin:
                      exp.company === "equipe" || exp.company === "pikd"
                        ? "0%"
                        : "10%",
                  }}
                />
              }
            >
              {exp.positions.map((position, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom:
                      index < exp.positions.length - 1 ? "20px" : "0px",
                  }}
                >
                  <h5 className="vertical-timeline-element-title">
                    {position.title}
                  </h5>
                  {index < 1 && (
                    <a
                      href={exp.link}
                      className="vertical-timeline-element-subtitle"
                    >
                      {exp?.companyName}
                    </a>
                  )}
                  <ul style={{ paddingLeft: 32 }}>
                    {position.info.map((role, roleIndex) => (
                      <li key={roleIndex}>
                        <p style={{ fontSize: 15, color: "#bbb" }}>{role}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
