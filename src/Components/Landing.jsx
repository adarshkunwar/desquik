import React from "react";

const Landing = () => {
  return (
    <div className="flex justify-center items-center w-[40rem] bg-blue-300 h-[20rem]">
      <div className="text-center">
        <div className="text-3xl font-bold text-black">
          It seems like you are not logged in. <br /> Remedy that?
        </div>
        <button className="button-unclicked rounded-2xl shadow-xl">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Landing;
