import "./App.css";
import Board from "./components/Board";
import React, { useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:2000");

function App() {
  const [showGame, setShowGame] = useState(false);
  const [username, setUserName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username !== "" && roomNumber !== "") {
      socket.emit("join_room", { username, roomNumber });
      setShowGame(true);
    }
  };

  return (
    <div>
      {!showGame ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(event) => setUserName(event.target.value)}
            value={username}
            placeholder="Enter Username"
          />
          <input
            type="text"
            value={roomNumber}
            onChange={(event) => setRoomNumber(event.target.value)}
            placeholder="Enter Room Number"
          />
          <button type="submit">Enter</button>
        </form>
      ) : (
        <div>
          <h1>Hello {username}</h1>
          <Board socket={socket} username={username} roomNumber={roomNumber} />
        </div>
      )}
    </div>
  );
}

export default App;
