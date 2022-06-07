import React, { useState, useEffect } from "react";

const Chat = ({ roomNumber, username, socket }) => {
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    socket.on("recieve_message", (data) => {
        console.log(socket, "socket");

    // ASSIGNMENT 2 - Why chat is being repeated
      setMessageList([...messageList, data]);
    });

    socket.on('left_chat', (data) => {
        console.log(`User left with id: ${data}`);
    })

    console.log(messageList);
  }, [socket]);



  const sendMessage = async (event) => {
    event.preventDefault();

    if (currentMessage !== "") {
      const messageBody = {
        room: roomNumber,
        userName: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          " : " +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageBody);
      setMessageList([...messageList, messageBody]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="chat-window">
      <h1>Live Chat</h1>
      <div className="chat-body">
        {messageList.map((messages) => {
          return (
            <div
              className="message"
              id={username === messages.userName ? "You" : "Other"}
            >
              <div className="message-container">
                <div className="message-content">
                  <p>{messages.message}</p>
                </div>
                <div className="meta-information">
                  <p id="username">{messages.userName}</p>
                  <p id="time">{messages.time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <form className="chat-footer" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Enter Message"
          value={currentMessage}
          onChange={(event) => setCurrentMessage(event.target.value)}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
