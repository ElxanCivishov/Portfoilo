import "./resume.css";
import Title from "../title/Title";
import ResumeItem from "./ResumeItem";
import Skills from "./Skills";
import { resumeData } from "../../../data/data";

const Resume = () => {
  return (
    <article className="resume">
      <Title>Resume</Title>
      <ResumeItem resumeData={resumeData} />
      <Skills />
    </article>
  );
};

export default Resume;
