import { useState } from "react";
import { useDispatch } from "react-redux";

import { MdClose, MdEdit } from "react-icons/md";

import "../modal.css";
import { toast } from "react-toastify";
import { Box, TextField, TextareaAutosize } from "@mui/material";

import { storage } from "../../../../config/Firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Loader from "../../../ui/Loader";
import { BiCloudUpload } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { updateAboutDoing } from "../../../../redux/aboutDoingSlice";

const Modal = ({ setEditModal, editData }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(editData.title);
  const [content, setContent] = useState(editData.content);
  const [imageAsset, setImageAsset] = useState(editData.imageUrl);
  const [isLoading, setIsLoading] = useState(false);

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
      dispatch(
        updateAboutDoing({
          id: editData.docId,
          title,
          content,
          imageUrl: imageAsset,
        })
      );
      clearData();
      setEditModal(false);
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
          <button className="close" onClick={() => setEditModal(false)}>
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

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{ m: 4 }}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            label="Title"
            size="small"
            variant="standard"
          />
          <TextareaAutosize
            minRows={2}
            placeholder="write content"
            size="small"
            variant="outlined"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </Box>
        <div className="button-wrapper">
          <button
            className="modal-button btn-edit"
            onClick={() => saveDetails()}
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
