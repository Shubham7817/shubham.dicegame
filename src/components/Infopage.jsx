import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
// import image from "../assets/diceimg.png"

const Infopage = () => {
  return (
    <div className="flex justify-center items-center gap-x-8 mt-9">
      <img
        src="https://s3-alpha-sig.figma.com/img/fce5/e0a7/6d3e531201ecd44ca61f9d27ff82e0ae?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MfCy3uCPobjDHlK5dm24po3HT-zHVFRQRO7XaRKPR5f6wZFwkGyFUUUyZ34c~ctx9RplegOO4y0vuMhgfgLab-G59mUhqkIdsQM6K2je0uo5XkobTel96XRTWJYd57aDf8aDSVhDpafh7BZ-6OpmKMK~EElNBYB~A21C6T0JoqHMihsxLGIfypif5c6yO2Z-IE5bCnhoRt1Bgx85KvPrq6bP6-soX0rvfD-T4cM8n8Xlx9dHDo6Z0KNiqkdgvwuTZbV9HAfHGIThoV5-mAefJWH0A7jogWUnFBvH6-fulQFAWQ0MLP4XW3LnJfMM9C9ZZojqWbdOjNJG~EdFDtfyBA__"
        alt="dice image"
      />
      <div className="flex  flex-col gap-6 items-center justify-center ">
        <div>
        <h1 className="text-8xl font-bold">DICE GAME</h1>
        </div>
        <div className="ml-[350px]">
          <NavLink to={"/gamepage"}>
          <button className="bg-black text-white px-12 py-2 rounded-lg">
                  Play Now
                </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Infopage;
