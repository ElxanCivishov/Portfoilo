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
          <div className="content-card" data-testimonials-item>
            <div className="testimonials-avatar-box">
              <img
                src={item.img}
                alt={item.title}
                width="60"
                data-testimonials-avatar
              />
            </div>
            <h4 className="h4 testimonials-item-title" data-testimonials-title>
              {item.title}
            </h4>
            <div className="testimonials-text" data-testimonials-text>
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
