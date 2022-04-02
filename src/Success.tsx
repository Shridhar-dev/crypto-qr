import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tick from "./tick.svg";
import Confetti from 'react-confetti'



const Success = () => {
  
  return (
    <div className='text-white flex justify-center items-center flex-col min-h-screen'>
      <div className='rounded-full'>
        <img src={Tick} className="bg-white rounded-full tick_rotate" width={"120vw"}/>
      </div>
      <span className=' text-3xl mt-10'>Success!</span>
      <Link to="/scanqr" className='opacity-50 text-lg mt-10 underline'>
            Make another transaction
      </Link>
        <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500}
        recycle={false}
        />
    </div>
  );
};

export default Success