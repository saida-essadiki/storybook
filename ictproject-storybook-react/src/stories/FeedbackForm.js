import React, { useState } from "react";
import "./FeedbackForm.css";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add code to submit the feedback to your server or API
    console.log(`Name: ${name}\nEmail: ${email}\nFeedback: ${feedback}`);
  };

  return (
    <div className="feedback-container">
      <h1 className="feedback-heading">Feedback</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback" className="form-label">
            Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            className="form-textarea"
            required
          ></textarea>
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;
