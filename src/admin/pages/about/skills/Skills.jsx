import { useState } from "react";
import { useSelector } from "react-redux";

import { useAboutSkillsListener } from "../../../../fetchDataHooks/AboutContent";

import AddModal from "./AddModal";
import SkillItem from "./SkillItem";
import Title from "../../../ui/title/Title";

import { Button } from "@mui/material";
import "./skill.css";

const Skills = () => {
  //   fetch data from aboutSlice store
  const skillsItems = useSelector((state) => state.about.SkillsLogo);

  useAboutSkillsListener();

  const [addModal, setAddModal] = useState(false);

  return (
    <div style={{ paddingLeft: "20px", marginTop: "50px" }}>
      <Title> Skills</Title>
      <Button
        onClick={() => setAddModal(true)}
        sx={{ m: 2 }}
        size="small"
        variant="contained"
        color="info"
      >
        Add Skill
      </Button>
      <div>
        {skillsItems.map((url) => {
          return <SkillItem url={url} />;
        })}
      </div>
      {addModal && <AddModal setAddModal={setAddModal} />}
    </div>
  );
};

export default Skills;
