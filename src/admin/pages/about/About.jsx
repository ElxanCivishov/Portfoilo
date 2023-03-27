import { useState } from "react";
import "./about.css";
import Title from "../../ui/title/Title";
import Modal from "./text/Modal";
import AddModal from "./text/AddModal";
import { useAboutListener } from "../../../config/Firebase";

import { useSelector } from "react-redux";

const About = () => {
  useAboutListener();
  const abouts = useSelector((state) => state.about.abouts);

  const [showTextModal, setShowTextModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const [modalData, setModalData] = useState("");

  const handleModal = (item) => {
    setShowTextModal(true);
    setModalData(item);
  };

  return (
    <div className="admin-about">
      <Title>About</Title>
      <div className="add-text">
        <button onClick={() => setShowAddModal(true)}>New text</button>
      </div>
      <div className="about-text">
        {abouts.map((item) => (
          <div
            key={item.id}
            className="text-item"
            onClick={() => handleModal(item)}
          >
            <p>{item.content}</p>
          </div>
        ))}
      </div>
      {showTextModal && (
        <Modal setShowTextModal={setShowTextModal} modalData={modalData} />
      )}
      {showAddModal && <AddModal setShowAddModal={setShowAddModal} />}
    </div>
  );
};

export default About;
