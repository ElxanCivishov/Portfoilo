import { useState } from "react";
import Title from "../title/Title";
import "./contact.css";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const changeName = (e) => {
    setName(e.currentTarget.value);
  };
  const changeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const changeMessage = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <article className="contact">
        <Title>Contact</Title>

        <section className="mapbox">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4099108440373!2d49.874958214634425!3d40.421921363249055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403089077a8dd483%3A0x12bd32f7f0de5073!2sSara%20Logistics%20Azerbaijan!5e0!3m2!1sen!2saz!4v1679729899619!5m2!1sen!2saz"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <div className="input-wrapper">
              <input
                type="text"
                name="fullname"
                className="form-input"
                placeholder="Full name"
                required
                value={name}
                onChange={(e) => changeName(e)}
              />

              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => changeEmail(e)}
              />
            </div>
            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => changeMessage(e)}
            ></textarea>
            <button
              className="form-btn"
              type="submit"
              disabled={!name || !email || !message}
            >
              <BsSend className="send-icon" />
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </>
  );
};

export default Contact;
