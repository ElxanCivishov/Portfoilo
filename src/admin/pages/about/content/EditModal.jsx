import { useState } from "react";
import { useDispatch } from "react-redux";

import { MdClose, MdEdit } from "react-icons/md";

import {
  changeDarftAboutContent,
  updateAbout,
} from "../../../../redux/aboutSlice";

import "../modal.css";
import { toast } from "react-toastify";

const Modal = ({ setEditModal, updateData }) => {
  const [data, setData] = useState(updateData.content);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    setData(e.target.value);
    dispatch(changeDarftAboutContent(data));
  };

  const handleSubmit = () => {
    if (data === updateData.content) {
      setEditModal(false);
      toast.error("The operation failed because the content was not modified.");
    } else {
      setEditModal(false);
      dispatch(updateAbout({ id: updateData.id, upatedData: data }));
    }
  };

  return (
    <div className="modal">
      <div className="content">
        <div className="button-wrapper">
          <button className="close" onClick={() => setEditModal(false)}>
            <MdClose />
          </button>
        </div>

        <textarea
          type="text"
          className="modal-title"
          value={data}
          onChange={(e) => handleUpdate(e)}
        />
        <div className="button-wrapper">
          <button
            className="modal-button btn-edit"
            onClick={() => handleSubmit()}
            disabled={!data}
          >
            <MdEdit />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
