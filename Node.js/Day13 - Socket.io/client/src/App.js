import "./App.css";
import io from "socket.io-client";
import React, { useState } from "react";
import Chat from "./chat";
// Server port
const socket = io.connect("http://localhost:2000");

function App() {
  const [username, setUsername] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [showChat, setShowchat] = useState(false);

  const enterRoomNumber = (event) => {
    event.preventDefault();

    if (username !== "" && roomNumber !== "") {
      socket.emit("join_room", { username, roomNumber });
      setShowchat(true);
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <form className="joinChatContainer" onSubmit={enterRoomNumber}>
          <h1>Join chat</h1>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="text"
            value={roomNumber}
            placeholder="Enter Room Number"
            onChange={(event) => setRoomNumber(event.target.value)}
          />
          <button type="submit">Enter</button>
        </form>
      ) : (
        <Chat socket={socket} roomNumber={roomNumber} username={username} />
      )}
    </div>
  );
}

export default App;
