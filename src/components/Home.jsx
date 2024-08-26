import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        {/* <div className="home_content"> */}
          <div className="avatar">
            <div
              className="image avatar_img"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <div style={{ display: 'flex'}}>
              <h4 className="greeting">{`Hi, I'm `}</h4>
              <h4 className="name">Puujee <span className="wave-emoji" role="img" aria-label="waving hand">👋</span></h4>
            </div>
            <p className="job">
            React Native Engineer with 6+ years of experience, specializing in UX/UI design, animations, code quality, and testing throughout the software development lifecycle.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        {/* </div> */}
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
