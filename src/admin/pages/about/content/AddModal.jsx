import { useDispatch } from "react-redux";
import { useState } from "react";

import { MdClose, MdAdd } from "react-icons/md";
import { auth } from "../../../../config/Firebase";

import {
  addAbout,
  changeDarftAboutContent,
} from "../../../../redux/aboutSlice";

import "../modal.css";

const AddModal = ({ setAddModal }) => {
  const dispatch = useDispatch();

  const [addData, setAddData] = useState("");

  const changeData = (e) => {
    setAddData(e.target.value);
    dispatch(
      changeDarftAboutContent({
        content: e.target.value,
        uid: auth.currentUser.uid,
      })
    );
  };

  const handleAdd = () => {
    setAddModal(false);
    dispatch(addAbout());
  };

  return (
    <div className="modal">
      <div className="content">
        <div className="button-wrapper">
          <button className="close" onClick={() => setAddModal(false)}>
            <MdClose />
          </button>
        </div>
        <textarea
          type="text"
          className="modal-title"
          value={addData}
          onChange={(e) => changeData(e)}
        />
        <div className="button-wrapper">
          <button
            className="modal-button  btn-add"
            onClick={() => handleAdd()}
            disabled={!addData}
          >
            <MdAdd />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
