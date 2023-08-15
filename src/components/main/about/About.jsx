import Title from "../title/Title";
import Testimonial from "./testimonial/Testimonial";
import Client from "./clients/Client";
import Service from "./service/Service";

import { about } from "../../../data/data";

import "./about.css";

const About = () => {
  return (
    <article className="active">
      <Title>About me</Title>
      <section className="about-text">
        {about && about.map((item) => <p key={item.id}>{item.text}</p>)}
      </section>
      <Service />
      {/* <Testimonial /> */}
      {/* <Client /> */}
    </article>
  );
};

export default About;
