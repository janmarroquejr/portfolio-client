import React, { useState } from "react";
import { Container, Columns, Button, Heading } from "react-bulma-components";
import Swal from "sweetalert2";

const Contact = () => {
  var formData = new FormData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const nameInputHandler = e => {
    setName(e.target.value);
  };

  const emailInputHandler = e => {
    setEmail(e.target.value);
  };

  const messageInputHandler = e => {
    setMessage(e.target.value);
  };

  const submitFormClickHandler = () => {
    formData.name = name;
    formData.email = email;
    formData.message = message;
    let errorHandler = 0;

    if (name == "" || email == "" || message == "") {
      errorHandler++;
    }

    if (errorHandler === 0) {
      Swal.fire({
        title: "Sending message...",
        showConfirmButton: false
      });
      fetch("http://infinite-castle-42364.herokuapp.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          if (res.data.message === "message_not_sent" || errorHandler > 0) {
            if (res.data.message === "message_not_sent") {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "An error occurred while sending your message! :(",
                showConfirmButton: false,
                timer: 1500
              });
            }
            if (errorHandler > 0) {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please make sure you fill in all fields.",
                showConfirmButton: false,
                timer: 1500
              });
            }
          } else {
            Swal.fire({
              icon: "success",
              title: "Your message was sent!",
              showConfirmButton: false,
              timer: 1500
            });
          }
          setName("");
          setEmail("");
          setMessage("");
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please make sure you fill in all fields.",
        showConfirmButton: false,
        timer: 3000
      });
    }
  };

  return (
    <Container className="has-text-center animated bounceInDown">
      <Heading size={1} className="has-text-light">
        Contact Me
      </Heading>

      <Columns size={12}>
        <Columns.Column size={1}>
          <div className="social-network social-circle">
            <div className="social-wrapper">
              <a
                href="http://www.facebook.com/janmur"
                target="_blank"
                rel="noopener noreferrer"
                className="icoFacebook"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>

              <a
                href="http://www.twitter.com/janmarroquejr"
                target="_blank"
                rel="noopener noreferrer"
                class="icoTwitter"
                title="Twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/janmar-roque-029611197/"
                target="_blank"
                rel="noopener noreferrer"
                class="icoLinkedin"
                title="Linkedin"
              >
                <i class="fab fa-linkedin"></i>
              </a>

              <a
                href="http://www.instagram.com/janmarroquejr"
                target="_blank"
                rel="noopener noreferrer"
                className="icoInstagram"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </Columns.Column>
        <Columns.Column className="has-text-left" size={6} className="form">
          <form id="myForm">
            <label className="label has-text-light">Name</label>
            <div className="control">
              <input
                type="text"
                id="name"
                className="input"
                onChange={nameInputHandler}
                value={name}
                placeholder="Name"
              />
            </div>

            <label className="label has-text-light">E-mail</label>
            <div className="control">
              <input
                type="email"
                id="email"
                className="input"
                value={email}
                onChange={emailInputHandler}
                placeholder="E-mail"
              />
            </div>

            <label className="label has-text-light">Message</label>
            <div className="control">
              <textarea
                id="comments"
                className="textarea"
                rows="4"
                value={message}
                onChange={messageInputHandler}
                placeholder="Your inquiries..."
              />
            </div>
            <hr />
            <Button
              type="button"
              onClick={submitFormClickHandler}
              fullwidth={true}
              outlined={true}
              color="dark"
              className="has-text-light"
            >
              Submit
            </Button>
          </form>
        </Columns.Column>
        <Columns.Column className="has-text-right" size={5}>
          <iframe
            title="gmap"
            id="gmap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2295.970888946831!2d121.06073878757421!3d14.579270990557012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c814bd58052f%3A0x91cbbc8c737bc8dc!2sCedar%20Mansion!5e0!3m2!1sen!2sph!4v1579664372526!5m2!1sen!2sph"
          ></iframe>
        </Columns.Column>
      </Columns>

      <Columns size={12}></Columns>
    </Container>
  );
};

export default Contact;
