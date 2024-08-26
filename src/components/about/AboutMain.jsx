import React from "react";
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";
import { FaReact } from "react-icons/fa";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          {/* <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>Who am I?</h3>
              </div>
            </div>
          </div> */}
          {/* End title */}

          <Intro />
          {/* <div className="tokyo_tm_short_info">
            <PersonalInfo />
          </div> */}
          {/* End personal info */}

          {/* <div className="tokyo_tm_button" data-position="left">
          <a href="assets/img/cv.pdf" download>
              <span>Download CV</span>
            </a>
          </div> */}
        </div>
      </div>
      {/* End .container */}

      <div className="tokyo_tm_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_progressbox */}

      <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>
      {/* End .tokyo_tm_skillbox */}

      {/* <div className="tokyo_tm_skillbox" style={{ display: 'flex' }}>
        <div style={{  display: 'flex', padding: 16, backgroundColor: 'black', borderRadius: 16, justifyItems: "center", alignItems: 'center'}}>
        <FaReact color="#61DAFB" fontSize={120} size={120}  />
        <span style={{ marginLeft: 12 }}>React.js</span>
        </div>
      </div> */}

      {/* End .tokyo_tm_skillbox


      {/* <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div> */}
      {/* End tokyo_tm_resumebox */}

      {/* <div className="tokyo_tm_testimonials">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div> */}
      {/* End tokyo_tm_testimonials */}

      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
