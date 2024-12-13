import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm Raydot. How can I assist you today?", fromAI: true },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromAI: false }]);
      setInput("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "I'm here to help with anything you need!", fromAI: true },
        ]);
      }, 1000);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-header">
        <h5 className="ch-ti">Raydot</h5>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chatbot-message ${
              msg.fromAI ? "chatbot-ai" : "chatbot-user"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown} // Trigger send on Enter
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
