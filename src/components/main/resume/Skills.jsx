import SkillItem from "./SkillItem";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "Web design",
      degre: "80",
    },
    {
      id: 2,
      title: "Branding",
      degre: "90",
    },
    {
      id: 3,
      title: "Graphic design",
      degre: "70",
    },
    {
      id: 4,
      title: "WordPress",
      degre: "50",
    },
  ];
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
