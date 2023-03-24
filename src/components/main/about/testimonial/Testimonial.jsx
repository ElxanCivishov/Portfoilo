import avatar1 from "../../../../images/avatar-1.png";
import avatar2 from "../../../../images/avatar-2.png";
import avatar3 from "../../../../images/avatar-3.png";
import avatar4 from "../../../../images/avatar-4.png";
import TestimonialItem from "./TestimonialItem";

import "./testimonial.css";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      img: avatar1,
      title: "Daniel lewis",
      date: "12 June 2023",
      content:
        "Richard was hired to create a corporate identity. We were verypleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet,ullamcous cididt consectetur adipiscing elit, seds do et eiusmodtempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      id: 2,
      img: avatar2,
      title: "Jessica miller",
      date: "12 June 2023",
      content:
        "Richard was hired to create a corporate identity. We were verypleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet,ullamcous cididt consectetur adipiscing elit, seds do et eiusmodtempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      id: 3,
      img: avatar3,
      title: "Emily evans",
      date: "12 June 2023",
      content:
        "Richard was hired to create a corporate identity. We were verypleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet,ullamcous cididt consectetur adipiscing elit, seds do et eiusmodtempor incididunt ut laborels dolore magnarels alia.",
    },
    {
      id: 4,
      img: avatar4,
      title: "Henry william",
      date: "12 June 2023",
      content:
        "Richard was hired to create a corporate identity. We were verypleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet,ullamcous cididt consectetur adipiscing elit, seds do et eiusmodtempor incididunt ut laborels dolore magnarels alia.",
    },
  ];

  return (
    <div className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>
      <ul className="testimonials-list has-scrollbar">
        <TestimonialItem testimonials={testimonials} />
      </ul>
    </div>
  );
};

export default Testimonial;
