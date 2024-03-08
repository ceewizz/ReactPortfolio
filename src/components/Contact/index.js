import React, { useState } from "react";

// Check if the email is valid
import { validateEmail } from "../../utils/helpers/";

function Contact() {
// Variables 
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

   // Setting the state depending on inputs
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    
    e.preventDefault();

  // Checking for valid email if not the prompt an error
    if (!validateEmail(email) || !userName) {
      setErrorMessage("Invalid response! Please check your input and try again.");
     
      return;
     
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

   // If no error then we proceed
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Reach Out</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hey there {userName}</h3>
          <p>Want to get in touch?</p>
          <address>
           Santa Ana, CA <br />
            Mobile: <a href="949.414.2130">949.414.2130</a>
            <br />
            E:{" "}
            <a href="mailto://ceewizzhuhwin@gmail.com">
            <strong>ceewizzhuhwin@gmail.com</strong>
            </a>
          </address>
          <p>
            <strong>Leave Me Some Love</strong>
          </p>
        </div>

        {/* contact section  */}
        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            {/* name */}
            <label for="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            {/* email */}
            <label for="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            {/* Message */}
            <label for="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Let's Connect!
            </button>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;