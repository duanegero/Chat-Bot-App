//imports from react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//importing styles for button
import welcomeButtonClass from "../buttonClasses";

//importing icons from react
import { IoIosBatteryFull } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

export default function WelcomeForm() {
  //state variable to handle dots on welcome screen
  const [filledDots, setFilledDots] = useState(0);

  //variable to handle navigation
  const navigate = useNavigate();

  //function to handle button click
  const handleButtonClick = () => {
    //if dots less than 6
    if (filledDots < 6) {
      //variable to handle next dot
      const newFilledDots = filledDots + 1;
      //set varible to value of new dots
      setFilledDots(newFilledDots);

      //if dots equal 6 navigate to chat window
      if (newFilledDots === 6) {
        setTimeout(() => {
          navigate("/chat");
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[375px] h-[667px] border-4 rounded-4xl p-5 mt-14 mb-10 flex flex-col items-center justify-center relative bg-[url('../images/Welcome_background.jpeg')] bg-cover bg-center">
        <div className="mb-20">
          <IoIosBatteryFull className="text-4xl absolute top-0 right-6 text-[#34C759]" />
          <FaWifi className="text-2xl absolute top-1.5 right-17 text-[#F2F2F7]" />
          <FaSignal className="text-2xl absolute top-1.5 right-25 text-gray-100" />
          <p className="absolute top-2 left-4 text-[#F2F2F7] font-inter tracking-wider">
            Telus
          </p>

          <p className="text-center mb-6 tracking-wider text-[#F2F2F7] font-inter">
            Enter Passcode
          </p>
          <div className="flex flex-row justify-center items-center gap-5">
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 1 ? "bg-[#F2F2F7]" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 2 ? "bg-[#F2F2F7]" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 3 ? "bg-[#F2F2F7]" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 4 ? "bg-[#F2F2F7]" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 5 ? "bg-[#F2F2F7]" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 6 ? "bg-[#F2F2F7]" : ""
              }`}
            ></div>
          </div>
        </div>
        <div className="flex flex-row gap-4 mb-3">
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            1
          </button>
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            2<p className="text-xs">ABC</p>
          </button>
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            3 <p className="text-xs">DEF</p>
          </button>
        </div>
        <div className="flex flex-row gap-4 mb-3">
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            4<p className="text-xs">GHI</p>
          </button>
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            5<p className="text-xs">JKL</p>
          </button>
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            6<p className="text-xs">MNO</p>
          </button>
        </div>
        <div className="flex flex-row gap-4 mb-3">
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            7<p className="text-xs">PQRS</p>
          </button>
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            8<p className="text-xs">TUV</p>
          </button>
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            9<p className="text-xs">WXYZ</p>
          </button>
        </div>
        <div className="flex flex-row gap-4 mb-3">
          <button className={welcomeButtonClass} onClick={handleButtonClick}>
            0
          </button>
        </div>
        <div className="flex justify-between">
          <button className="absolute left-4 text-[#F2F2F7] font-inter tracking-wide">
            Emergency
          </button>
          <button
            className="absolute right-4 text-[#F2F2F7] font-inter tracking-wide"
            onClick={() => setFilledDots(0)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
