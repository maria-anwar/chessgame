import React, { useState, useRef, useEffect } from "react";
import user1 from "../assets/images/user1.jpg";

const ChessGame = () => {
  const [user1Time, setUser1Time] = useState(600);
  const [user2Time, setUser2Time] = useState(600);
  const [isUser1Turn, setIsUser1Turn] = useState(false);
  const [isUser2Turn, setIsUser2Turn] = useState(false);
  const user1ButtonRef = useRef();
  const user2ButtonRef = useRef();
  const [isGameStarted, setIsGameStarted] = useState(false);

 const handleStartGame = () => {
    setIsGameStarted(true);
    setIsUser1Turn(true);
    user1ButtonRef.current = setInterval(() => {
      setUser1Time((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(user1ButtonRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

   const handleMakeMove = () => {
      
      if (isUser1Turn) {
        clearInterval(user1ButtonRef.current);
        setIsUser1Turn(false);
        setIsUser2Turn(true);

          user2ButtonRef.current = setInterval(() => {
            setUser2Time((prevTime) => {
              if (prevTime <= 0) {
                clearInterval(user2ButtonRef.current);
                return 0;
              }
              return prevTime - 1;
            });
          }, 1000);
        
      } else{ 

          clearInterval(user2ButtonRef.current);
          setIsUser2Turn(false);
          setIsUser1Turn(true);
          user1ButtonRef.current = setInterval(() => {
            setUser1Time((prevTime) => {
              if (prevTime <= 0) {
                clearInterval(user1ButtonRef.current);
                return 0;
              }
              return prevTime - 1;
            });
          }, 1000);
        
      }
    
  };

  useEffect(() => {
    if ((user1Time <= 0 || user2Time <= 0) && isGameStarted) {
      clearInterval(user1ButtonRef.current);
      clearInterval(user2ButtonRef.current);
      // Game over logic here
      alert("Game Over");
      setIsGameStarted(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user1Time, user2Time, isGameStarted]);


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
                
                User 1
              </label>
            </div>
            <div className="text-red-500 text-2xl font-light bg-zinc-900 border rounded-lg shadow-lg px-6 py-2 max-h-max mt-4 mb-10 text-center">
             User 1 Timer: {Math.floor(user1Time / 60)}:{user1Time % 60}
            </div>

            <button
              className="px-4 py-2 bg-[#2a4b2a] rounded-lg text-white mt-4 mb-10 "
              onClick={handleMakeMove} disabled={!isUser1Turn}
            >
              Make Move 
            </button>
            {/* disabled={!isUser1Turn} */}
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
            User 2 Timer: {Math.floor(user2Time / 60)}:{user2Time % 60}
            </div>
            <button className="px-4 py-2 bg-[#2a4b2a] rounded-lg text-white mt-4 mb-10"
            onClick={handleMakeMove} disabled={!isUser2Turn}
            >
              Make Move
            </button>
          </div>
          <button
            className="rounded-xl px-4 py-3 bg-[#FF740A] mx-14 text-white text-xl font-normal"
            onClick={handleStartGame} disabled={isGameStarted}
          >
            Start
          </button>
        </div>

      
      </section>
     
   </>
  )
}

export default ChessGame