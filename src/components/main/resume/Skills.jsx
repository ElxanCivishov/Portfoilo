import SkillItem from "./SkillItem";
import { skills } from "../../../data/data";

const Skills = () => {
  return (
    <div className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        <SkillItem skills={skills} />
      </ul>
    </div>
  );
};

export default Skills;
