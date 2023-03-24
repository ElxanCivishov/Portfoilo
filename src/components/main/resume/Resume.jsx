import "./resume.css";
import Title from "../title/Title";
import ResumeItem from "./ResumeItem";
import Skills from "./Skills";

const Resume = () => {
  const resumeData = [
    {
      id: 1,
      title: "Education",
      content: [
        {
          id: 1,
          title: "University school of the arts",
          date: "2007 — 2008",
          content:
            "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
        },
        {
          id: 2,
          title: "New york academy of art",
          date: "2006 — 2007",
          content:
            "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
        },
        {
          id: 3,
          title: "High school of art and design",
          date: "2002 — 2004",
          content:
            "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
        },
      ],
    },
    {
      id: 2,
      title: "Experience",
      content: [
        {
          id: 1,
          title: "Creative director",
          date: "2015 — Present",
          content:
            "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
        },
        {
          id: 2,
          title: "Art director",
          date: "2013 — 2015",
          content:
            "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..",
        },
        {
          id: 3,
          title: "Web designer",
          date: "2010 — 2013",
          content:
            "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
        },
      ],
    },
  ];
  return (
    <article className="resume">
      <Title>Resume</Title>
      <ResumeItem resumeData={resumeData} />
      <Skills />
    </article>
  );
};

export default Resume;
