import React from "react";
import {
  JavascriptOriginal,
  PythonOriginal,
  TypescriptOriginal,
  JavaOriginal,
  ReactOriginal,
  NodejsOriginal,
  ReduxOriginal,
  JestPlain,
  GooglecloudOriginal,
  AmazonwebservicesOriginalWordmark,
  SwiftOriginal,
  KotlinOriginal,
  AnsibleOriginal,
  FigmaOriginal,
  FirebaseOriginal,
  Html5Original,
  Css3Original,
  GitOriginal,
  PostgresqlOriginal,
  GraphqlPlain,
  NextjsOriginal,
} from 'devicons-react';

const getSkillIcon = (skillName) => {
  switch (skillName) {
    case "JavaScript":
      return <JavascriptOriginal size={20} />;
    case "Python":
      return <PythonOriginal size={20} />;
    case "TypeScript":
      return <TypescriptOriginal size={20} />;
    case "Java":
      return <JavaOriginal size={20} />;
    case "ReactJS":
    case "React Native":
      return <ReactOriginal size={20} />;
      case "NextJS":
        return <NextjsOriginal color="black" size={22} />;
    case "NodeJS":
      return <NodejsOriginal size={20} />;
    case "Redux":
      return <ReduxOriginal size={20} />;
    case "Jest":
      return <JestPlain size={20} />;
    case "Firebase":
    case "Firestore":
      return <FirebaseOriginal size={20} />;
    case "GCP":
      return <GooglecloudOriginal size={20} />;
    case "AWS":
      return <AmazonwebservicesOriginalWordmark size={20} />;
    case "Swift":
      return <SwiftOriginal size={20} />;
    case "Kotlin":
      return <KotlinOriginal size={20} />;
    case "Ansible":
      return <AnsibleOriginal size={20} />;
    case "Figma":
      return <FigmaOriginal size={20} />;
    case "HTML":
      return <Html5Original size={20} />;
    case "CSS":
      return <Css3Original size={20} />;
    case "Git":
      return <GitOriginal size={20} />;
    case "PostgreSQL":
      return <PostgresqlOriginal size={20} />;
    case "GraphQL":
      return <GraphqlPlain size={20} />;
    default:
      return <ReactOriginal size={20} />; // Default to React icon if none match
  }
};

const Skills = () => {
  const skillsContent = [
    {
      id: 1,
      title: "Languages",
      progress: [
        { id: 1, skillName: "JavaScript", skillValue: "90" },
        { id: 2, skillName: "TypeScript", skillValue: "85" },
        { id: 3, skillName: "Python", skillValue: "90" },
        { id: 4, skillName: "Java", skillValue: "80" },
        { id: 5, skillName: "Swift", skillValue: "75" },
        { id: 6, skillName: "Kotlin", skillValue: "75" },
      ],
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      progress: [
        { id: 10, skillName: "React Native", skillValue: "90" },
        { id: 9, skillName: "ReactJS", skillValue: "90" },
        { id: 9, skillName: "NextJS", skillValue: "90" },
        { id: 11, skillName: "NodeJS", skillValue: "90" },
        { id: 12, skillName: "Redux", skillValue: "85" },
        { id: 13, skillName: "Jest", skillValue: "80" },
        { id: 14, skillName: "GraphQL", skillValue: "80" },

      ],
    },
    {
      id: 3,
      title: "Tools & Services",
      progress: [
        { id: 19, skillName: "AWS", skillValue: "75" },
        { id: 17, skillName: "Firebase", skillValue: "85" },
        { id: 18, skillName: "GCP", skillValue: "80" },
        { id: 15, skillName: "Git", skillValue: "90" },
        { id: 16, skillName: "PostgreSQL", skillValue: "85" },
        { id: 20, skillName: "Ansible", skillValue: "70" },
      ],
    },
  ];

  return (
    <>
      {skillsContent.map((item) => (
        <div key={item.id}>
          <div className="tokyo_section_title">
            <h3>{item.title}</h3>
          </div>

          <div className="tokyo_progress">
            {item?.progress?.map((skill) => (
              <div className="progress_inner" data-value={item.skillValue} key={skill.id}>
                <span>
                  <span className="label">{skill?.skillName}</span>
                  <div className="logo">{getSkillIcon(skill?.skillName)}</div>
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
