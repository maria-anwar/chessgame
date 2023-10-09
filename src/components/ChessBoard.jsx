import React, { useState, useEffect } from "react";
import user1 from "../assets/images/user1.jpg";

const ChessBoard = () => {

//   const inputElem = useRef("");
//   const changeStyle = ()=>{
//     inputElem.current.style.backgroundColor = 'green'
//   }

  const [seconds, setSeconds] = useState(600);
  const [IsMoved, setIsMoved] = useState(true);
  const [running, setRunning] = useState(false);


  useEffect(() => {
    let timerInterval;

    if (running && seconds > 0) {
      timerInterval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => {
      clearInterval(timerInterval);
    };
  }, [running, seconds]);

  const startTimer = () => {
    setRunning(true);
  };
  
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} : ${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };

  const resetTimer = () => {
    setRunning(false);
    setSeconds(600); // Reset to 10 minutes
  };

  const HandleMove =()=>{
    resetTimer();
    setIsMoved(false);
   console.log(IsMoved);
  }
  // function handleClick() {
  //     ref.current = ref.current + 1;
  //     console.log('ref',ref.current);
  //   }

  return (
    <>
   
      <section className="flex justify-center py-20 items-center">
        <div className="border flex gap-16 flex-col bg-black py-20 px-52 rounded-md">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5">
              <img
                src={user1}
                alt="user-1"
                className="rounded-full w-20 h-20"
              />

              <label className="text-zinc-300 text-center font-normal">
                {" "}
                User 1
              </label>
            </div>
            <div className="text-red-500 text-2xl font-light bg-zinc-900 border rounded-lg shadow-lg px-6 py-2 max-h-max mt-4 mb-10 text-center">
              {formatTime(seconds)}
            </div>

              
            <button className="px-4 py-2 bg-[#2a4b2a] rounded-lg text-white mt-4 mb-10"
            onClick={HandleMove}
            > 
              Make Move
            </button>
            
            

          </div>
          <div className=" text-red-500 bg-zinc-900 border rounded-lg px-4 py-2">
            Times Up..
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5">
              <img
                src={user1}
                alt="user-1"
                className="rounded-full w-20 h-20"
              />

              <label className="text-zinc-300 text-center font-normal">
                {" "}
                User 2
              </label>
            </div>
            <div className="text-red-500 text-2xl font-light bg-zinc-900 border rounded-lg shadow-lg px-6 py-2 max-h-max mt-4 mb-10 text-center">
              10 : 00
            </div>
            <button className="px-4 py-2 bg-[#2a4b2a] rounded-lg text-white mt-4 mb-10">
              Make Move
            </button>
          </div>
          <button
            className="rounded-xl px-4 py-3 bg-[#FF740A] mx-14 text-white text-xl font-normal"
            onClick={startTimer}
          >
            Start
          </button>
        </div>
        
      </section>
    </>
  );
};

export default ChessBoard;
