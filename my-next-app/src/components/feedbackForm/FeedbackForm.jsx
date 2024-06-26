// src/components/feedbackForm/FeedbackForm.js
import { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedback, rating }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Feedback submitted successfully!');
      setFeedback('');
      setRating('');
    } else {
      setMessage(`Error: ${data.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Enter your feedback"
      ></textarea>
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Rate us (1-5)"
      />
      <button type="submit">Submit Feedback</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default FeedbackForm;
