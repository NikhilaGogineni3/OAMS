import React from 'react';
import './FAQ.css'; 

function FAQ() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <h2>Useful Information</h2>
      <dl className="faq-list">
        <dt className="question">Do I have to be a member to participate?</dt>
        <dd className="answer">Yes, membership is required to participate.</dd>
        
        <dt className="question">How often does Fameflare meet?</dt>
        <dd className="answer">We meet once a week on Mondays.</dd>
        
        <dt className="question">How do I join a meeting for the first time?</dt>
        <dd className="answer">To join a meeting for the first time, follow these steps: [provide instructions]</dd>
      </dl>
    </div>
  );
}

export default FAQ;
