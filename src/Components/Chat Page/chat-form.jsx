//imports from react
import { useEffect, useState, useRef } from "react";

//importing icons from React
import { BsRobot } from "react-icons/bs";
import { FaArrowCircleUp } from "react-icons/fa";

export default function ChatForm({ socket, messages, setMessages }) {
  //state variable to handle new messages
  const [newMessage, setNewMessage] = useState("");

  //variable to handle the useRef
  const chatWindowRef = useRef(null);

  useEffect(() => {
    //variable to handle the chatwind refence
    const chatWindow = chatWindowRef.current;

    //if chat window exists
    if (chatWindow) {
      //set the position to the max scroll height, ie the bottom
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }, [messages]);

  //function to run on submit
  const handleSendMessage = () => {
    //check that message has content
    if (newMessage.trim() !== "") {
      //log for testing
      console.log("Sending message:", newMessage);
      //emit new message to server
      socket.emit("chat-message", newMessage);
      //set messages to include new message
      setMessages((prevMessage) => [
        ...prevMessage,
        { bot: false, text: newMessage },
      ]);
      //clear the message input
      setNewMessage("");
    }
  };

  // Function to handle key press
  const handleKeyDown = (event) => {
    // If the key pressed is "Enter/Return"
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior
      handleSendMessage(); // Run the send message function
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[375px] h-[667px] overflow-y-scroll border-4 rounded-4xl p-5 mt-14 mb-10 flex flex-col items-center justify-center relative font-inter text-xl bg-black tracking-widest text-white">
        <div
          ref={chatWindowRef}
          className="flex-grow overflow-y-scroll mb-4 chat-window"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-center my-2 ${
                msg.bot ? "justify-start bot-message" : "justify-end"
              }`}
            >
              {msg.bot && (
                <div className="flex items-center justify-start mr-2">
                  <BsRobot className="inline-block  text-[#50f134] text-[28px]" />
                </div>
              )}
              <p
                className={`px-4 py-2 rounded-xl ${
                  msg.bot ? "bg-[#4A4A4A]" : "bg-[#007aff]"
                }`}
              >
                {msg.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex w-full mt-2">
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="resize-none w-full p-2 bg-[#333] rounded-lg text-white focus:outline-none"
          ></textarea>

          <FaArrowCircleUp
            onClick={handleSendMessage}
            className="mt-2 ml-4 text-6xl text-[#007aff] hover:text-[#50f134] cursor-pointer"
          >
            Send
          </FaArrowCircleUp>
        </div>
      </div>
    </div>
  );
}
