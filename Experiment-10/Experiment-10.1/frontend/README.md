# 🎨 Cyberpunk Chat Frontend

A modern, real-time chat interface built with React and Vite featuring a cyberpunk-themed UI with neon colors and glowing effects.

## ✨ Features

- **Real-Time Messaging**: Instant message updates using WebSocket
- **Cyberpunk UI**: Neon green, pink, and cyan color scheme with glowing effects
- **Scanline Animation**: CRT monitor-style scanline effect overlay
- **Dynamic Server Configuration**: Connect to different backend servers
- **Connection Status**: Visual indicator showing connection state
- **Auto-Scroll**: Automatically scrolls to latest messages
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Message slide-in and glitch effects
- **Custom Scrollbar**: Styled scrollbar with neon glow

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── Components/
│   │   ├── Chat.jsx              # Main chat component with WebSocket logic
│   │   ├── MessageList.jsx       # Displays all messages
│   │   ├── MessageInput.jsx      # Input field and send button
│   │   └── App.css               # Cyberpunk component styles
│   ├── App.jsx                   # Root component
│   ├── index.css                 # Global styles and animations
│   ├── main.jsx                  # React entry point
│   └── assets/                   # Images and icons
├── public/                       # Static files
├── index.html                    # HTML template
├── package.json                  # Dependencies
├── vite.config.js               # Vite configuration
└── eslint.config.js             # ESLint rules
```

## 🧩 Components

### Chat.jsx
Main component that handles WebSocket connection and message management.

**Features:**
- Connects to backend WebSocket server
- Manages username state
- Tracks connection status
- Dynamic server URL configuration
- Publishes messages to `/app/chat`
- Subscribes to `/topic/messages`

**Props:** None

**State:**
```javascript
{
  messages: [],           // Array of message objects
  username: "",          // Current user's username
  connected: false,      // Connection status
  serverUrl: "",         // Backend server URL
  inputServerUrl: "",    // Temporary server URL input
  showServerInput: false // Toggle server config UI
}
```

### MessageList.jsx
Displays all messages in a scrollable container.

**Props:**
```javascript
{
  messages: Array<{
    sender: string,
    content: string
  }>
}
```

**Features:**
- Auto-scrolls to latest message
- Shows placeholder when no messages
- Smooth message animations
- Sender name in pink, content in cyan

### MessageInput.jsx
Input field and send button for composing messages.

**Props:**
```javascript
{
  sendMessage: (text: string) => void
}
```

**Features:**
- Enter key to send (Shift+Enter for new line)
- Character limit (500 chars)
- Clear input after sending
- Cyberpunk button styling

## 🎨 Styling

### Global Styles (index.css)

**CSS Variables:**
```css
--primary: #00ff41        /* Neon green */
--secondary: #ff006e      /* Hot pink */
--tertiary: #00d9ff       /* Cyan */
--bg: #0a0e27            /* Dark background */
--bg-secondary: #1a1f3a  /* Secondary background */
--text: #00ff41          /* Text color */
--text-muted: #888899    /* Muted text */
```

**Animations:**
- `scanlines` - CRT monitor effect (8s loop)
- `pulse` - Connection indicator pulse (2s loop)
- `messageSlide` - Message entrance animation (0.3s)
- `glitch` - Button hover glitch effect (0.3s)

### Component Styles (App.css)

**Key Classes:**
- `.chat-box` - Main container with neon border
- `.username` - Username input with cyan border
- `.messages` - Message container with scrollbar
- `.message` - Individual message styling
- `.input-area` - Input and button container

## 🔌 WebSocket Integration

### Connection Flow

```javascript
// 1. Create STOMP client
const client = new Client({
  webSocketFactory: () => new SockJS(socketUrl),
  reconnectDelay: 5000
});

// 2. On connect
onConnect: () => {
  client.subscribe("/topic/messages", (msg) => {
    // Handle incoming messages
  });
}

// 3. Send message
client.publish({
  destination: "/app/chat",
  body: JSON.stringify({ sender, content })
});
```

### Message Format

**Sending:**
```json
{
  "sender": "username",
  "content": "message text"
}
```

**Receiving:**
```json
{
  "sender": "username",
  "content": "message text"
}
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_WS_URL=http://localhost:8080
```

Or set it dynamically in the UI using the ⚙️ settings button.

### Vite Config

```javascript
// vite.config.js
export default {
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
}
```

## 🎯 Usage

### Basic Chat

1. **Start the app:**
   ```bash
   npm run dev
   ```

2. **Enter username** in the input field

3. **Click ⚙️ button** to configure server (if needed)

4. **Type message** and press Enter or click SEND

5. **See messages** appear in real-time

### Connect to Remote Server

1. Click ⚙️ settings button
2. Enter server URL: `http://BACKEND_IP:8080`
3. Click "Connect"
4. Wait for green connection indicator
5. Start chatting

## 🎨 Cyberpunk Theme Customization

Edit `src/index.css` to change colors:

```css
:root {
  --primary: #00ff41;      /* Change neon green */
  --secondary: #ff006e;    /* Change hot pink */
  --tertiary: #00d9ff;     /* Change cyan */
  --bg: #0a0e27;          /* Change background */
}
```

## 📱 Responsive Breakpoints

```css
@media (max-width: 768px) {
  /* Mobile optimizations */
  .chat-box { padding: 10px; }
  .message { font-size: 12px; }
  .input-area button { padding: 10px 20px; }
}
```

## 🔧 Development

### Available Scripts

```bash
# Start dev server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Hot Module Replacement (HMR)

Changes to components automatically reload in the browser without losing state.

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.5 | UI framework |
| react-dom | ^19.2.5 | React DOM rendering |
| @stomp/stompjs | ^7.3.0 | STOMP protocol client |
| sockjs-client | ^1.6.1 | WebSocket fallback |
| vite | ^8.0.9 | Build tool |
| eslint | ^9.39.4 | Code linting |

## 🐛 Troubleshooting

### Connection Failed
- Check backend is running on correct port
- Verify server URL in settings
- Check browser console (F12) for errors
- Ensure firewall allows WebSocket connections

### Messages Not Appearing
- Verify connection status (green indicator)
- Check browser console for errors
- Ensure backend is broadcasting messages
- Try refreshing the page

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check if CSS files are loaded (F12 → Network)
- Verify no CSS conflicts with extensions

### Port Already in Use
```bash
# Kill process on port 5173
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

## 🚀 Performance Tips

- Messages are stored in state (consider pagination for large chats)
- Auto-scroll uses `scrollIntoView` with smooth behavior
- Animations use CSS for better performance
- SockJS provides WebSocket fallback for older browsers

## 🔐 Security Considerations

- No input sanitization (add DOMPurify for production)
- No authentication (implement JWT tokens)
- No message encryption (add TLS/SSL)
- CORS allows all origins (restrict in production)

## 📚 Learning Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [STOMP Protocol](https://stomp.github.io/)
- [Vite Documentation](https://vitejs.dev/)

## 🎓 Key Concepts

- **WebSocket**: Bidirectional communication protocol
- **STOMP**: Messaging protocol over WebSocket
- **SockJS**: WebSocket emulation with fallbacks
- **React Hooks**: useState, useEffect, useRef
- **CSS Animations**: Keyframes and transitions
- **Responsive Design**: Mobile-first approach

## 📝 Notes

- Messages are not persisted (lost on refresh)
- No user authentication implemented
- Simple in-memory message broker on backend
- Suitable for learning and small-scale applications

## 🎉 Features Showcase

### Cyberpunk UI Elements
- ✨ Neon glowing text
- 🌈 Color-coded messages
- 📺 CRT scanline effect
- ⚡ Glitch animations
- 💫 Smooth transitions
- 🔌 Connection indicator

### User Experience
- 🎯 Intuitive interface
- ⌨️ Keyboard shortcuts (Enter to send)
- 📱 Mobile responsive
- 🔄 Auto-scroll to latest
- ⚙️ Dynamic configuration
- 🟢 Real-time status

---

**Built with ❤️ using React + Vite**

For the full project documentation, see the main [README.md](../README.md)
