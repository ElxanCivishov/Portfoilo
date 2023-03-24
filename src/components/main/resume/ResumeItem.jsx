import { FiBookOpen } from "react-icons/fi";

const ResumeItem = ({ resumeData }) => {
  return (
    <>
      {resumeData.map((item) => (
        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FiBookOpen />
            </div>
            <h3 className="h3">{item.title}</h3>
          </div>
          <ol className="timeline-list">
            {item.content.map((listItem) => (
              <li className="timeline-item">
                <h4 className="h4 timeline-item-title">{listItem.title}</h4>
                <span>{listItem.date}</span>
                <p className="timeline-text">{listItem.content}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
};

export default ResumeItem;
