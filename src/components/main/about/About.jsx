import Title from "../title/Title";
import Testimonial from "./testimonial/Testimonial";
import Client from "./clients/Client";
import Service from "./service/Service";

import "./about.css";

const About = () => {
  const about = [
    {
      id: 1,
      text: "I'm Creative Director and UI/UX Designer from Sydney, Australia,working in web development and print media. I enjoy turning complexproblems into simple, beautiful and intuitive designs.",
    },
    {
      id: 2,
      text: "My job is to build your website so that it is functional anduser-friendly but at the same time attractive. Moreover, I addpersonal touch to your product and make sure that is eye-catchingand easy to use. My aim is to bring across your message and identityin the most creative way. I created web design for many famous brandcompanies.",
    },
  ];
  return (
    <article className="active">
      <Title>About me</Title>
      <section className="about-text">
        {about && about.map((item) => <p key={item.id}>{item.text}</p>)}
      </section>
      <Service />
      {/* <Testimonial /> */}
      <Client />
    </article>
  );
};

export default About;
