import React from "react";

const SkillItem = ({ skills }) => {
  return (
    <>
      {skills.map((item) => (
        <li className="skills-item">
          <div className="title-wrapper">
            <h5 className="h5">{item.title}</h5>
            <div>{item.degre}%</div>
          </div>
          <div className="skill-progress-bg">
            <div
              className="skill-progress-fill"
              style={{ width: `${item.degre}%` }}
            ></div>
          </div>
        </li>
      ))}
    </>
  );
};

export default SkillItem;
