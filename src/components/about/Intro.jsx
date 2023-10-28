import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/profile.png",
    name: "Purevsuren Adiyasuren",
    designation: "Software Engineer",
    text: (
      <>
        <p>
        Experienced software engineer with a solution-oriented mindset,
        an unyielding enthusiasm for learning, and a deep passion for tackling
        complex engineering challenges. With over 5 years of hands-on experience,
        I have played a vital role in all stages of the software development lifecycle,
        specializing in React-Native and Mobile Development.
        </p>
        <p>
        My expertise spans a diverse range of technologies, including ReactJS, NextJS,
        Restify, and essential third-party integrations for business and technical
        analytics. I possess extensive experience in software testing, utilizing
        industry-standard frameworks and automation tools.
        </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
