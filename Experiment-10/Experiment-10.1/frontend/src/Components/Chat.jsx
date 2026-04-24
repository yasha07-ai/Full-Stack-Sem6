import { useEffect, useState, useRef } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const [serverUrl, setServerUrl] = useState(
    import.meta.env.VITE_WS_URL || "http://localhost:8080"
  );
  const [inputServerUrl, setInputServerUrl] = useState(serverUrl);
  const [showServerInput, setShowServerInput] = useState(false);
  const clientRef = useRef(null);

  const connectToServer = (url) => {
    if (clientRef.current) {
      clientRef.current.deactivate();
    }

    const socketUrl = `${url}/ws`;
    console.log("🔌 Connecting to:", socketUrl);

    const client = new Client({
      webSocketFactory: () => new SockJS(socketUrl),
      reconnectDelay: 5000,

      onConnect: () => {
        console.log("✅ Connected to server");
        setConnected(true);
        setServerUrl(url);

        client.subscribe("/topic/messages", (msg) => {
          const data = JSON.parse(msg.body);
          setMessages((prev) => [...prev, data]);
        });
      },

      onStompError: (frame) => {
        console.error("❌ STOMP error:", frame);
        setConnected(false);
      },

      onDisconnect: () => {
        console.log("⚠️ Disconnected");
        setConnected(false);
      },
    });

    client.activate();
    clientRef.current = client;
  };

  useEffect(() => {
    connectToServer(serverUrl);

    return () => {
      if (clientRef.current) {
        clientRef.current.deactivate();
      }
    };
  }, []);

  const sendMessage = (text) => {
    if (!username.trim()) {
      alert("⚠️ Enter username first");
      return;
    }

    if (!text.trim()) {
      return;
    }

    if (clientRef.current && connected) {
      clientRef.current.publish({
        destination: "/app/chat",
        body: JSON.stringify({
          sender: username,
          content: text,
        }),
      });
    } else {
      alert("❌ Not connected to server");
    }
  };

  const handleServerUrlChange = () => {
    if (inputServerUrl.trim()) {
      connectToServer(inputServerUrl);
      setShowServerInput(false);
    }
  };

  return (
    <div className="chat-box">
      <div style={{ display: "flex", gap: "10px", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "10px", alignItems: "center", flex: 1 }}>
          <input
            className="username"
            placeholder="Enter your username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength="20"
          />
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: connected ? "#00ff41" : "#ff006e",
              boxShadow: connected ? "0 0 10px #00ff41" : "0 0 10px #ff006e",
              animation: connected ? "pulse 2s infinite" : "none",
              flexShrink: 0,
            }}
          />
        </div>
        <button
          onClick={() => setShowServerInput(!showServerInput)}
          style={{
            padding: "8px 12px",
            fontSize: "12px",
            background: showServerInput ? "rgba(0, 217, 255, 0.2)" : "rgba(255, 0, 110, 0.1)",
            border: `2px solid ${showServerInput ? "#00d9ff" : "#ff006e"}`,
            color: showServerInput ? "#00d9ff" : "#ff006e",
            cursor: "pointer",
            borderRadius: "2px",
            transition: "all 0.3s ease",
          }}
        >
          ⚙️
        </button>
      </div>

      {showServerInput && (
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            value={inputServerUrl}
            onChange={(e) => setInputServerUrl(e.target.value)}
            placeholder="e.g., http://192.168.1.100:8080"
            style={{
              flex: 1,
              padding: "10px 12px",
              border: "2px solid #00d9ff",
              background: "rgba(0, 217, 255, 0.05)",
              color: "#00d9ff",
              fontSize: "12px",
            }}
          />
          <button
            onClick={handleServerUrlChange}
            style={{
              padding: "10px 15px",
              fontSize: "12px",
              background: "rgba(0, 255, 65, 0.1)",
              border: "2px solid #00ff41",
              color: "#00ff41",
              cursor: "pointer",
            }}
          >
            Connect
          </button>
        </div>
      )}

      <div style={{ fontSize: "12px", color: "#888899", padding: "5px" }}>
        Server: {serverUrl} • Status: {connected ? "🟢 Connected" : "🔴 Disconnected"}
      </div>

      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
