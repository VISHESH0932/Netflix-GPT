import React, { useRef, useState } from 'react'
import Header from './Header'
import validate from '../utils/validate';
import { auth} from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword , updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND ,USER_AVATAR } from '../utils/constants';


const Login = () => {
  
    const [toggle, setToggle] = useState(false);
    const [errormessage,SetErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleBtnClick = () =>{
      //validation the form data

      const message = validate(email.current.value,password.current.value);
      SetErrorMessage(message);

      if(message) return;

      //if no error, then proceed to sign in or sign up

       if( toggle){
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value , 
      photoURL: USER_AVATAR,
    }).then(() => {
      const {uid ,email, displayName , photoURL } = auth.currentUser;
      dispatch(addUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}));
    }).catch((error) => {
      SetErrorMessage(error.message);
    });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrorMessage(errorCode + "-" + errorMessage);
    // ..
  });
  }

  else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    SetErrorMessage(errorCode + "-" + errorMessage);
  });
  } 

  };

  return (
    <>
    <div>
    <Header/>
      <img 
        className='absolute'
        alt="bg"
        src={BACKGROUND}
        />
    </div>
    <form  onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black w-[27rem] h97/12 my-36 mx-auto right-0 left-0 rounded-sm text-white bg-op'>
        <h1 className='text-3xl font-bold py-6'>
            {toggle ? "Sign Up" : "Sign In"}
        </h1>
        <input 
        type="email" 
        placeholder='Email' 
        className='w-full h-12 bg-black-200 border border-b-gray-300 rounded-md p-2 m-2'
        ref={email}  
        />

        {toggle &&  <input 
        type="text" 
        placeholder='Full Name' 
        className='w-full h-12 bg-black-200 border border-b-gray-100 rounded-md p-2 m-2'
        ref={name}
        />}

        <input 
        type="password" 
        placeholder='Password' 
        className='w-full h-12 bg-black-200 border border-b-gray-100 rounded-md p-2 m-2'
        ref={password}
        />

        <p className='text-red-600 text-sm font-bold py-2 ml-2'>{errormessage}</p>
        <button 
        className='w-full h-10 bg-red-600 rounded-md p-2 m-2 text-white font-bold'
        onClick={handleBtnClick}
        >{toggle ? "Sign Up" : "Sign In"}</button>

        {! toggle 
        &&
        <div>
        <h3 
        className='py-2 text-center'>OR
        </h3>

        <button 
        className='w-full h-10  bg-gray-500 bg-opacity-80 rounded-md p-2 m-2 text-white font-bold'>
        Use a sign-in code
        </button>

        <h3 
        className='text-center'>
        Forgot Password?
        </h3>

        <div 
        className='py-2 flex items-center '>
          <input 
          type="checkbox" 
          className='w-4 h-4 m-2'/>
            <label 
            className='text-white'>
            Remember me
            </label>
         </div>
        </div>
        }
        <p onClick={handleToggle}
         className='py-2 text-stone-300'>
         {toggle ? "Already Registered?":"New to Netflix?"}
          <span 
          className=' font-bold text-white cursor-pointer'>
          {toggle?"Sign In Now.":"Sign Up Now."}
          </span>
        </p>

        <p 
        className='py-4 text-sm text-stone-300'>
        This page is protected by Google reCAPTCHA to ensure you're not a bot. 
        <span className='text-red-600 cursor-pointer'>
        Learn more.
        </span>
        </p>
    </form>
    </>
  )
}


export default Login
