import React from "react";
import { SocialIcon } from 'react-social-icons'

const SocialShare = [
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/purevsurena/",
  },
  {
    iconName: "github",
    link: "https://github.com/purevsurena",
  },
  {
    iconName: "email",
    link: "mailto:a.purevsuren0120@gmail.com?subject=Your%20Subject%20Here&body=Your%20message%20here",
  },
  {
    iconName: "medium",
    link: "https://medium.com/@purevsurena",
  },
];

const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              {<SocialIcon network={val.iconName}  url={val.link} bgColor="rgb(36, 41, 46)" fgColor="#fff"/>}
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
