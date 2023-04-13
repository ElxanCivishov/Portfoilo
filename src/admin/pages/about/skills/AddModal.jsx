import { useDispatch } from "react-redux";
import { useState } from "react";

import { storage } from "../../../../config/Firebase";
import { setSkillsLogo } from "../../../../redux/aboutSlice";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import Loader from "../../../ui/Loader";
import { BiCloudUpload } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { toast } from "react-toastify";

import "../modal.css";

const AddModal = ({ setAddModal }) => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Skills/${Date.now()}-${imageFile.name}`);
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
          toast.success("Uploaded successfully!");
          dispatch(setSkillsLogo(downloadUrl));
          setIsLoading(false);
          setAddModal(false);
        });
      }
    );
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
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default AddModal;
