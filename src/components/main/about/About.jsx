import Title from "../title/Title";

import Service from "./service/Service";

import "./about.css";
import Testimonial from "./testimonial/Testimonial";
import Client from "./clients/Client";

const About = () => {
  const about = {
    textOne:
      "I'm Creative Director and UI/UX Designer from Sydney, Australia,working in web development and print media. I enjoy turning complexproblems into simple, beautiful and intuitive designs.",
    textTwo:
      "My job is to build your website so that it is functional anduser-friendly but at the same time attractive. Moreover, I addpersonal touch to your product and make sure that is eye-catchingand easy to use. My aim is to bring across your message and identityin the most creative way. I created web design for many famous brandcompanies.",
  };
  return (
    <>
      <article className="active" data-page="about">
        <Title>About me</Title>
        <section className="about-text">
          {about.textOne && <p>{about.textOne}</p>}
          {about.textTwo && <p>{about.textTwo}</p>}
        </section>
        <Service />
        <Testimonial />
        <Client />
      </article>
    </>
  );
};

export default About;
