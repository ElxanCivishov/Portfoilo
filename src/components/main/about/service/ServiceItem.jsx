import React from "react";

const ServiceItem = ({ service }) => {
  return (
    <>
      {service.map((item) => (
        <li key={item.id} className="service-item">
          <div className="service-icon-box">
            <img src={item.img} alt="design icon" width="40" />
          </div>
          <div className="service-content-box">
            <h4 className="h4 service-item-title">{item.title}</h4>
            <p className="service-item-text">{item.content}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default ServiceItem;
