import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { MdClose, MdAdd } from "react-icons/md";

import { auth, storage } from "../../../../config/Firebase";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import {
  addAboutDoing,
  changeDarftDoingContent,
  changeDarftDoingImageUrl,
  changeDarftDoingTitle,
} from "../../../../redux/aboutDoingSlice";

import Loader from "../../../ui/Loader";
import { BiCloudUpload } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";

import "../modal.css";
import { toast } from "react-toastify";
import { TextareaAutosize } from "@mui/material";

const AddModal = ({ setAddModal }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [imageAsset, setImageAsset] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(
      changeDarftDoingImageUrl({
        imageUrl: imageAsset,
        uid: auth.currentUser.uid,
      })
    );
  }, [imageAsset]);

  const changeTitle = (e) => {
    setTitle(e.target.value);
    dispatch(changeDarftDoingTitle(e.target.value));
  };

  const changeContent = (e) => {
    setContent(e.target.value);
    dispatch(changeDarftDoingContent(e.target.value));
  };

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `images/${Date.now()}-${imageFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const uploadProgress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        toast.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageAsset(downloadUrl);
          setIsLoading(false);
          toast.success("image upload successfully");
        });
      }
    );
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    console.log(imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      toast.success("Image deleted successfully!");
    });
  };

  const saveDetails = () => {
    setIsLoading(true);
    if (!title || !imageAsset || !content) {
      toast.error("Requireed fileds can't be empty!");
    } else {
      dispatch(addAboutDoing());
      clearData();
      setAddModal(false);
    }
  };

  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    setContent("");
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
          <div>
            <Loader />
          </div>
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
                onChange={(e) => uploadImage(e)}
              />
            </label>
          </>
        ) : (
          <>
            <div>
              <img
                src={imageAsset}
                style={{ width: "100px", height: "100px" }}
                alt="uplaodedImage"
              />
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
          style={{ marginTop: "30px" }}
          value={title}
          onChange={(e) => changeTitle(e)}
        />
        <TextareaAutosize
          minRows={2}
          placeholder="write content"
          size="sm"
          variant="outlined"
          value={content}
          onChange={(e) => changeContent(e)}
        />

        <div className="button-wrapper">
          <button
            className="modal-button  btn-add"
            onClick={() => saveDetails()}
            disabled={!title || !content || !imageAsset}
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
