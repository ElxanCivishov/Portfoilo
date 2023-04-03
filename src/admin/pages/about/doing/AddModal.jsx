import { useDispatch } from "react-redux";
import { useState } from "react";

import { MdClose, MdAdd } from "react-icons/md";
import { auth } from "../../../../config/Firebase";

import imgAsst from "../../../../images/icon-dev.svg";

import {
  addAbout,
  changeDarftAboutContent,
} from "../../../../redux/aboutSlice";

import Loader from "../../../ui/Loader";
import { BiCloudUpload } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

import "../modal.css";

const AddModal = ({ setAddModal }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAsset, setImageAsset] = useState(imgAsst);
  const [content, setContent] = useState("");
  const [isLoading, setisLoading] = useState(false);

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

  const uploadImage = () => {};
  const deleteImage = () => {};

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

        {isLoading ? (
          <div>  <Loader /></div>
        ) : !imageAsset ? (
          <>
            <label>
              <div>
                <BiCloudUpload className="upload-icon" />
                <p>Click here to upload image</p>
              </div>
              <input
                type="file"
                accept="image/*"
                name="uploadImage"
                id="uploadImage"
                onChange={() => uploadImage()}
              />
            </label>
          </>
        ) : (
          <>
            <div>
              <img src={imageAsset} alt="uplaodedImage" />
              <button type="button" onClick={() => deleteImage()}>
                <FiTrash />
              </button>
            </div>
          </>
        )}

        <input
          type="text"
          name="title"
          placeholder="Add title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="content"
          placeholder="Write content..."
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
