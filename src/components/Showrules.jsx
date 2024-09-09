import React from "react";
import { NavLink } from "react-router-dom";

const Showrules = () => {
  return (
    <div className="flex flex-col  items-center my-auto h-screen w-scren bg-orange-200">
      <div className="flex justify-center items-center flex-col gap-4 mt-8 font-bold text-2xl">
        <ul className="flex justify-center items-center flex-col gap-4 mt-8 font-bold text-2xl">
          <li>
            <h1 className=" font-extrabold underline text-6xl">How to play dice game</h1>
          </li>

          <li>
          <sup className="flex items-center top-5 font-extraboldbold right-5">*</sup>
            Select on any number
            {/* <div> <sup className="flex items-center top-5 font-extraboldbold right-5">*</sup>Select on any number</div> */}
          </li>

          <li> <sup className="flex items-center top-5 font-extraboldbold right-5">*</sup>
           Click on dice image
          </li>
          
            <li> <sup className="flex items-center top-5 font-extraboldbold right-5">*</sup>
             After click on dice if selected number is equal to the dice number, 
             </li>
             
             <li> <sup className="flex items-center top-5 font-extraboldbold  right-5">*</sup>
              You will get same point as dice , if you wrong guess then 2 point
              will be deducted from your score.
            </li>
        </ul>
      </div>

      <NavLink to={"/gamepage"}>
        <button className="p-3 border-2 font-bold  mt-11 bg-red-400 border-black rounded-full">
          Back to game
        </button>
      </NavLink>

      <div className="font-bold italic mt-72"><a href="https://www.linkedin.com/in/shubham7817">@shubham</a></div>

    </div>

  );
};

export default Showrules;
