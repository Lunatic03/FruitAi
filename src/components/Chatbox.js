import React, { useState } from 'react';
import './Chatbox.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'user' }]);
      setInput('');
      setTimeout(() => {
        setMessages([...messages, { text: input, type: 'user' }, { text: 'This is a simulated response.', type: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-window">
        <div className="chatbox-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <form className="chatbox-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chatbox;
