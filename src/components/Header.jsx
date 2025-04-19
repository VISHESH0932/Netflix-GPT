import React , { useEffect } from 'react'
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector ,useDispatch} from 'react-redux'; 
import { addUser , removeUser } from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constants';



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const handleSignOut = () =>{


    signOut(auth)
    .then(() => {
      navigate("/");
    }).catch(() => {
      navigate("/error")
    });
    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,email, displayName , photoURL } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName , photoURL: photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    }); 
    
    //unsubscribe when component unmounts  
    return () => unsubscribe();
    
  },[])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img 
        className='w-44'
        alt="logo"
        src= {LOGO}
    />
    {
      user &&  
    <div className='flex p-3'>
    <img alt="usericon"
    className='w-10 h-10 rounded-md'
    src={user.photoURL}
    />
    <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>
    }

   </div>

  )
}

export default Header
