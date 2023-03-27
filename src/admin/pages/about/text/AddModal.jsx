import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import "./modal.css";
const AddModal = ({ setShowAddModal }) => {
  const [data, setData] = useState("");

  const dispatch = useDispatch();

  const changeData = (e) => {
    setData(e.target.value);
  };

  return (
    <>
      <div className="about-modal-container active">
        <section className="testimonials-modal">
          <button
            className="modal-close-btn"
            onClick={() => setShowAddModal(false)}
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
                className="btn btn-add"
                onClick={() => {
                  setShowAddModal(false);
                }}
              >
                Add text
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AddModal;
