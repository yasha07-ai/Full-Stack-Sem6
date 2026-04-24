import { useEffect, useRef } from "react";

function MessageList({ messages }) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messages">
      {messages.length === 0 ? (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "#888899",
          fontSize: "14px",
          textAlign: "center"
        }}>
          <div>
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>⚡</div>
            <div>Waiting for messages...</div>
            <div style={{ fontSize: "12px", marginTop: "5px" }}>Enter username and start chatting</div>
          </div>
        </div>
      ) : (
        messages.map((msg, i) => (
          <div key={i} className="message">
            <b>{msg.sender}</b>
            <div style={{ marginTop: "4px", color: "#00d9ff" }}>
              {msg.content}
            </div>
          </div>
        ))
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
