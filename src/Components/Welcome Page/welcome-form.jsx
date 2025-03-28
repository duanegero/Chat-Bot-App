//imports from react
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import welcomeButtonClass from "../buttonClasses";
import { IoIosBatteryFull } from "react-icons/io";
import { FaWifi } from "react-icons/fa";
import { FaSignal } from "react-icons/fa";

export default function WelcomeForm() {
  const [filledDots, setFilledDots] = useState(0);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (filledDots < 6) {
      const newFilledDots = filledDots + 1;
      setFilledDots(newFilledDots);

      if (newFilledDots === 6) {
        setTimeout(() => {
          navigate("/chat");
        }, 1000);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl tracking-widest mt-3 font-boldonse border-2 p-6 rounded-2xl bg-[#007aff] text-white">
        Welcome
      </h1>
      <div className="w-[375px] h-[667px] border-4 rounded-2xl p-5 mt-14 mb-10 flex flex-col items-center justify-center relative bg-[url('../images/Welcome_background.jpeg')] bg-cover bg-center">
        <div className="mb-20">
          <IoIosBatteryFull className="text-4xl absolute top-0 right-6 text-lime-400" />
          <FaWifi className="text-2xl absolute top-1.5 right-17 text-gray-100" />
          <FaSignal className="text-2xl absolute top-1.5 right-25 text-gray-100" />
          <p className="absolute top-2 left-4 text-gray-100">Telus</p>

          <p className="text-center mb-6 tracking-wider text-gray-100">
            Enter Passcode
          </p>
          <div className="flex flex-row justify-center items-center gap-5">
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 1 ? "bg-gray-100" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 2 ? "bg-gray-100" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 3 ? "bg-gray-100" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 4 ? "bg-gray-100" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 5 ? "bg-gray-100" : ""
              }`}
            ></div>
            <div
              className={`border rounded-full w-4 h-4 text-gray-100 ${
                filledDots >= 6 ? "bg-gray-100" : ""
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
          <button className="absolute left-4 text-gray-100">Emergency</button>
          <button
            className="absolute right-4 text-gray-100"
            onClick={() => setFilledDots(0)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
