import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    //todo
    emailjs
      .sendForm(
        "service_zz3b33r",
        "template_67diili",
        {
          name: name,
          email: email,
          message: message,
        },
        "user_TIvr3TK2kUa2Q7DMECzcd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" onSubmit={(e) => sendEmail(e)}>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                  />
                </li>
                <li>
                  <input type="reset" value="Clear" />
                </li>
              </ul>
            </form>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope"></span>
                <h3>Email</h3>
                <a href="mailto:sinfangli@gmail.com">sinfangli@gmail.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone"></span>
                <h3>Phone</h3>
                <span>(778) 320 2848</span>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home"></span>
                <h3>Address</h3>
                <span>
                  Sawmill Crec #3588
                  <br />
                  Vancouver, BC V5S 0H5
                  <br />
                  Canada
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}

export default Contact;
