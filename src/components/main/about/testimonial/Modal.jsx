import quote from "../../../../images/icon-quote.svg";
import { MdClose } from "react-icons/md";

const Modal = ({ showModal, setShowModal, modalData }) => {
  return (
    <>
      {showModal && (
        <div className="modal-container active">
          <div className="overlay"></div>
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              onClick={() => setShowModal(false)}
            >
              <MdClose />
            </button>
            <div className="modal-img-wrapper">
              <div className="modal-avatar-box">
                <img src={modalData.img} alt="Daniel lewis" width="80" />
              </div>
              <img src={quote} alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title">{modalData.title}</h4>
              <span>{modalData.date}</span>
              <div data-modal-text>
                <p>{modalData.content}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Modal;
