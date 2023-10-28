import React from "react";

const KnowledgeInterest = () => {
  const knowledgeContent = [
    {
      id: 1,
      colClass: "left",
      title: "Experience Highlights",
      content: [
        "State Management (Redux, Hooks, Context, MobX)",
        "Firebase (notifications, crash analytics, app analytics)",
        "AWS (EC2, Route53, S3, SES)",
        "App Release (App Store, Play Store, App Gallery)",
        "CI/CD (Blue-Green Deployment, Ansible, Bitrise)",
      ],
    },
    {
      id: 2,
      colClass: "right",
      title: "Code Development Focus",
      content: [
        "High-quality",
        "Smooth animations",
        "Pixel-perfect UI",
        "Optimized solution",
        "clean structure",
      ],
    },
  ];

  return (
    <>
      {knowledgeContent.map((item) => (
        <div className={item.colClass} key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>
          <div className="tokyo_tm_skill_list">
            <ul>
              {item.content.map((val, i) => (
                <li key={i}>
                  <span>
                    <img
                      className="svg"
                      src="assets/img/svg/rightarrow.svg"
                      alt="arrow"
                    />
                    {val}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default KnowledgeInterest;
