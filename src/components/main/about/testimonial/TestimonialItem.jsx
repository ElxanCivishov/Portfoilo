import { useState } from "react";
import Modal from "./Modal";

const TestimonialItem = ({ testimonials }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");

  const handleModal = (item) => {
    setShowModal(true);
    setModalData(item);
  };
  return (
    <>
      {testimonials.map((item) => (
        <li
          key={item.id}
          className="testimonials-item"
          onClick={(e) => handleModal(item)}
        >
          <div className="content-card">
            <div className="testimonials-avatar-box">
              <img src={item.img} alt={item.title} width="60" />
            </div>
            <h4 className="h4 testimonials-item-title">{item.title}</h4>
            <div className="testimonials-text">
              <p>{item.content}</p>
            </div>
          </div>
        </li>
      ))}
      <Modal
        modalData={modalData}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </>
  );
};

export default TestimonialItem;
