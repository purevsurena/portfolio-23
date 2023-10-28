import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experienceData from '../../assets/experience.json'

const Experience = () => {
  return (
    <>
     <VerticalTimeline>
     {experienceData?.experience?.map((exp) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#272829', color: '#fff', padding: 40, paddingBottom: 20 }}
          contentArrowStyle={{ borderRight: '15px solid  #272829' }}
          date={`${exp.dateFrom} - ${exp.dateTo}`}
          iconStyle={{ background: '#1AAFD0', color: '#fff' }}
          icon={
            <img
              src={require(`../../../public/assets/img/company/${exp?.company
                .replace(/ /g, '')
                .toLowerCase()}.png`)}
              alt={`${exp.company}-logo`}
              style={{
                width: exp.company === 'equipe' ? '100%' : '80%',
                height: exp.company === 'equipe' ? '100%' : '80%',
                borderRadius: '50%', margin: exp.company === 'equipe' ? '0%' : '10%' }}
            />}
          >
          <h4  className="vertical-timeline-element-title">{exp?.title}</h4>
          <span style={{ color: '#1AAFD0' }} className="vertical-timeline-element-subtitle">{exp?.companyName}</span>
          <ul>
            {exp.info.map((role) => (
              <li><p style={{ fontSize: 15, color: '#bbb' }}>{role}</p></li>
            ))}
          </ul>
          {/* <div className="experience-card-tech">
              <ul>
                {exp.stack.map((tech) => (
                  <li key={`${exp.company}-${tech}`}>{tech}</li>
                ))}
              </ul>
            </div> */}
      </VerticalTimelineElement>
    ))}
      </VerticalTimeline>
    </>
  );
};

export default Experience;
