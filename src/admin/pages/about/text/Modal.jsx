import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeDarftAboutContent } from "../../../../redux/aboutSlice";
import "./modal.css";
const Modal = ({ setShowTextModal, modalData }) => {
  const [data, setData] = useState(modalData.content);

  const dispatch = useDispatch();

  const changeData = (e) => {
    setData(e.target.value);
    dispatch(changeDarftAboutContent(data));
  };

  return (
    <>
      <div className="about-modal-container active">
        <section className="testimonials-modal">
          <button
            className="modal-close-btn"
            onClick={() => setShowTextModal(false)}
          >
            <MdClose />
          </button>
          <div className="modal-content">
            <textarea
              type="text"
              className="modal-title"
              value={data}
              onChange={(e) => changeData(e)}
            />
            <div className="buttons">
              <button
                className="btn btn-edit"
                onClick={() => {
                  setShowTextModal(false);
                }}
                disabled={!data}
              >
                Edit
              </button>
              <button
                className="btn  btn-delete"
                onClick={() => {
                  setShowTextModal(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Modal;
