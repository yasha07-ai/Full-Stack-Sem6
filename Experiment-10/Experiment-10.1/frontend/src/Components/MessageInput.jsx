import { useState } from "react";

function MessageInput({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text);
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="input-area">
      <input
        value={text}
        placeholder="Type your message... (Enter to send)"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        maxLength="500"
      />
      <button onClick={handleSend}>
        SEND
      </button>
    </div>
  );
}

export default MessageInput;
