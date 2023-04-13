import { useDispatch } from "react-redux";
import { deleteObject, ref } from "firebase/storage";

import { storage } from "../../../../config/Firebase";
import { deleteSkillLogo } from "../../../../redux/aboutSlice";

import { toast } from "react-toastify";

const SkillItem = ({ url }) => {
  const dispatch = useDispatch();
  const deleteImage = () => {
    const deleteRef = ref(storage, url);
    deleteObject(deleteRef).then(() => {
      toast.success("Image deleted successfully!");
      dispatch(deleteSkillLogo(url));
    });
  };
  return (
    <div>
      <img src={url} alt="Skill" width={80} height={80} />
      <button type="button" onClick={() => deleteImage()}>
        sil
      </button>
    </div>
  );
};

export default SkillItem;
