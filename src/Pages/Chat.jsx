//importing packages and modules to use in app
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

//importing helper functions
import ChatForm from "../Components/Chat Page/chat-form";

export default function Chat() {
  //state variables to handle socket and messages
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    document.title = "Chat";

    document.body.classList.add("bg-[#3C3C3C]");
    //variable to handle new socket
    const newSocket = io("http://localhost:3010", {
      transports: ["websocket"],
    });

    //set socket state with new socket
    setSocket(newSocket);

    // Listen for bot replies from the server
    newSocket.on("bot-reply", (reply) => {
      //log the replay for testing
      console.log("Bot reply received:", reply);
      //set messages to include new replay
      setMessages((prevMessages) => [
        ...prevMessages,
        { bot: true, text: reply },
      ]);
    });

    //clean up function to run on unmount
    return () => {
      document.body.classList.remove("bg-[#3C3C3C]");

      //removes event listener
      newSocket.off("bot-reply");
      //disconnects the server
      newSocket.disconnect();
    };
  }, []);

  return (
    <>
      {socket && (
        <ChatForm
          socket={socket}
          messages={messages}
          setMessages={setMessages}
        />
      )}
    </>
  );
}
