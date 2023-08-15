import ServiceItem from "./ServiceItem";
import "./service.css";

import { service } from "../../../../data/data";

const Service = () => {
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
