import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './logo.png'
function Home() {
  return (
    <div className='font-sans min-h-screen w-full text-white flex justify-center items-center flex-col '>
        <img src={Logo} width="200" />
        <h1 className=' text-5xl mb-8'>CryptoQR</h1>
        <span className=' text-2xl text-center px-10'>An easy way to send crypto transactions using QR</span>
        <div className='flex items-center'>
          <Link to="/scanqr">
            <button className=' bg-white text-black p-2 px-5 mt-5 mx-2'> Pay Now </button>
          </Link>
          <Link to="/getqr">
            <button className=' bg-white text-black p-2 px-5 mt-5 mx-2'> Get QR </button>
          </Link>
        </div>
        <div className='mt-20'>
          Made by <a href="https://twitter.com/shridhar_kdev" className=' opacity-50' target="_">@shridhar_kdev</a>
        </div>
    </div>
  )
}

export default Home