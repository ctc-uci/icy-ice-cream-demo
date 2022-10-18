import React, { useState } from 'react';
import './Contact.css';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const submitForm = (e) => {
        if (!name && !email) {
            setError("Please enter your name and email!");
        } else if (!name) {
            setError("Please enter your name and resubmit!");
        } else if (!validateEmail(email)) {
            setError("Please enter a valid email and resubmit!");
        } else {
            setSuccess(true);
        }
        // prevent refresh on submit
        e.preventDefault();
    }

  return (
    <div className="contact">
        <div className="contact-description">
            <h2>Contact</h2>
            <p>Want to join our mailing list to stay up to date? Fill out the form below!</p>
        </div>
        <form onSubmit={submitForm}>
            <label>
                Name: 
                <input type="text" placeholder="Enter your first and last name" onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="text" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
        {/* conditional rendering */}
        {success && <div className="feedback success">
            <div className="feedback-icon">
                <AiOutlineCheckCircle style={{color: 'green'}} />
            </div>
            <div className="inner">
                <p>Success!</p>
                <br />
                <p>You’re officially part of our mailing list! Stay tuned for upcoming and exciting news and events from us.</p>
            </div>
        </div>}
        {(!success && error) && <div className="feedback fail">
            <div className="feedback-icon">
                <AiOutlineCloseCircle style={{color: 'red'}} />
            </div>
            <div className="inner">
                <p>Error</p>
                <p>{error}</p>
            </div>
        </div>}
    </div>
  );
};

export default Contact;
