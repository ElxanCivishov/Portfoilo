import ServiceItem from "./ServiceItem";
import "./service.css";

import design from "../../../../images/icon-design.svg";
import dev from "../../../../images/icon-dev.svg";
import photo from "../../../../images/icon-photo.svg";
import app from "../../../../images/icon-app.svg";

const Service = () => {
  const service = [
    {
      id: 1,
      img: design,
      title: "Web Design",
      content:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      id: 2,
      img: dev,
      title: "Web development",
      content: "High-quality development of sites at the professional level.",
    },
    {
      id: 3,
      img: app,
      title: "Mobile apps",
      content: "Professional development of applications for iOS and Android.",
    },
    {
      id: 4,
      img: photo,
      title: "Photography",
      content:
        "I make high-quality photos of any category at a professional level.",
    },
  ];
  return (
    <div className="service">
      <h3 className="h3 service-title">What i'm doing</h3>
      <ul className="service-list">
        <ServiceItem service={service} />
      </ul>
    </div>
  );
};

export default Service;
