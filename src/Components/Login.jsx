import React from 'react'

const Login = (props) => {
  return (
    <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white h-screen lg:w-full text-center flex '>

       <div className='container m-auto lg:w-3/4  sm:w-full h-1/3 text-center  '>
        <p className='  mx-auto '>please use sepolia test network</p>
        <p className='lg:text-5xl text-4xl w-3/4 mx-auto font-bold'>Welcome to Bells Blockchain voting platform</p>
        <p className='xs:text-5xl m-12 text-4xl w-3/4 mx-auto font-bold'>Vote for your preferred candidate</p>
         <button onClick={ props.ConnectWallet} className= 'bg-white w-40 h-11 lg:mt-5 mt-10 rounded-3xl text-black font-bold hover:bg-[#cdb6fc]'>Connect Wallet</button>
       </div>
      
    </div>
  )
}

export default Login
