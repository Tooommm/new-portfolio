import "./ContactForm.css";

import React, { useEffect, useState } from "react";

import FeedBack from "./FeedBack";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [feedBack, setFeedBack] = useState("");

  useEffect(() => {
    let inputMail = document.getElementById("email");
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (email !== "") {
      email.match(regex)
        ? (inputMail.style.borderBottomColor = "green")
        : (inputMail.style.borderBottomColor = "red");
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d01bsah",
        "template_3n3ic2n",
        e.target,
        "user_N9Eoy0DfLY7o6Ms2rl6hE"
      )
      .then(
        () => {
          setName("");
          setCompany("");
          setPhone("");
          setEmail("");
          setMessage("");
          setFeedBack("Votre message à bien été envoyé! Merci!");
        },
        (error) => {
          setFeedBack(error.text);
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="title">
        <h1>Contact me</h1>
        {feedBack !== "" && <FeedBack message={feedBack} />}
      </div>
      <div className="form-content">
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setName(e.target.value)}
          placeholder="name *"
          value={name}
        />
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) => setCompany(e.target.value)}
          placeholder="company"
          value={company}
        />
        <input
          type="text"
          id="phone"
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
          value={phone}
        />
        <input
          type="mail"
          id="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email *"
          value={email}
        />
        <textarea
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="message *"
          value={message}
          required
        />
      </div>
      <input className="button" type="submit" value="submit" />
    </form>
  );
};

export default ContactForm;
