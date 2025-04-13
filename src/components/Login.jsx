import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

  return (
    <>
    <div>
    <Header/>
      <img 
        className='absolute'
        alt="bg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
        />
    </div>
    <form className='absolute p-12 bg-black w-[27rem] h97/12 my-36 mx-auto right-0 left-0 rounded-sm text-white bg-op'>
        <h1 className='text-3xl font-bold py-6'>
            {toggle ? "Sign Up" : "Sign In"}
        </h1>
        <input type="email" placeholder='Email' className='w-full h-12 bg-black-200 border border-b-gray-300 rounded-md p-2 m-2'/>
        {toggle && <input type="text" placeholder='Full Name' className='w-full h-12 bg-black-200 border border-b-gray-100 rounded-md p-2 m-2'/>}
        <input type="password" placeholder='Password' className='w-full h-12 bg-black-200 border border-b-gray-100 rounded-md p-2 m-2'/>
        <button 
        className='w-full h-10 bg-red-600 rounded-md p-2 m-2 text-white font-bold'
        onClick={handleToggle}
        >{toggle ? "Sign Up" : "Sign In"}</button>

        {!toggle 
        &&
        <div>
        <h3 className='py-2 text-center'>OR</h3>
        <button className='w-full h-10  bg-gray-500 bg-opacity-80 rounded-md p-2 m-2 text-white font-bold'>Use a sign-in code</button>
        <h3 className='text-center'>Forgot Password?</h3>
        <div className='py-2 flex items-center '>
          <input type="checkbox" className='w-4 h-4 m-2'/>
            <label className='text-white'>Remember me</label>
        </div>
        </div>
        }
        <p onClick={handleToggle} className='py-2 text-stone-300'>{toggle ? "Already Registered?":"New to Netflix?"} <span className=' font-bold text-white cursor-pointer'>{toggle?"Sign up Now.":"Sign in Now."}</span></p>
        <p className='py-4 text-sm text-stone-300'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-red-600 cursor-pointer'>Learn more.</span></p>
    </form>
    </>
  )
}

export default Login
