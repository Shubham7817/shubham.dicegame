import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Dice from "react-dice-roll";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Gamepage = () => {
  const arrnumber = [1,2,3,4,5,6];
  const [score, setscore] = useState(0);
  const [dice,setdice] = useState(null);
  const [number,setnumber] = useState(null);
  const [isselected,setisselected] = useState(null);


    function handleclick(value){
      setisselected(value);
       setnumber(value)
   };



   useEffect(() => {
    if (dice !== null && number !== null) {
      if (number === dice) {
        setscore(prevScore => prevScore + dice);
      } else {
        setscore(prevScore => prevScore - 2);
      setisselected(null);
      }
      setnumber(null);
    }
  }, [dice]);
  

   function onroll(value) {
    if (number === null) {
      toast.error("You have not selected any number")
      console.log("not selected")
      return;
    }

    setdice(value);
    // setisselected(null);

    //   if (select === dice) {
    //     setscore((prevscore) => prevscore + dice);
    //   } else {
    //     setscore((prevscore) => prevscore - 2);
    //   }
    // setnumber(null)

  }


  

  function resetscore(){
    setscore(0);
    setdice(null);
    setnumber(null);
    seterror("")
  }

  return (
    <div>
      <div className="text-red-500 flex flex-row-reverse max-w-[1310px] font-bold text-xl p-4 invisible">You have not selected not any number</div>
      <nav className="flex top-[64px] justify-around text-xl border-2 py-3 h-32">
        <div className= " flex flex-col-reverse ">
          <div>Total Score</div>
          <div className="flex justify-center items-center text-6xl font-extrabold">{score}</div>
        </div>
        

        <div className="flex flex-col gap-5">
          <div className="flex gap-[53px]">
        
        {arrnumber.map((value,i)=>(
          <button
          key={i}
          className={`w-12 border-black h-12 border rounded-md ${isselected == value ? 'bg-black text-white' : 'hover:bg-black hover:text-white'}`}
          onClick={() => handleclick(value)} >
          {value}
        </button>
        ))}
          </div>
          <div className="flex flex-row-reverse font-bold">
            Select Number
          </div>
        </div>
      </nav>

      <div className="flex flex-col  gap-4 justify-center mt-16  items-center">
        <Dice className="bg-slate-800" width={23} height={12} onRoll={onroll} />
      <div className="text-xl mt-10 font-medium">
        Click on dice to roll
      </div>
      <div>
        <button onClick={resetscore} className="border-2 px-3 py-1 rounded-lg">
          Reset Score
        </button>
        </div>
        <div className="border-2 px-3 py-1 rounded-lg bg-black text-white">
          <NavLink to={"/gamepage/showrules"}>
        <button>
          Show Rules
        </button>
          </NavLink>
      </div>
      </div>
    </div>
  );
};

export default Gamepage;



