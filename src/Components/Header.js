import React from 'react'
import { LOGO } from '../utils/constants'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router'
import { signOut } from 'firebase/auth'
import { useSelector, useDispatch } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/slice/userSlice'
import { useEffect } from 'react'

const Header = () => {

const navigate = useNavigate();
const user = useSelector((store) => store.user);
const dispatch = useDispatch();

useEffect(() => {
  // ---------------------  Restriction of protected paths if not loggedIn and navigation to browse page if loggedIn should happen here only ............
    const unsubscribe = onAuthStateChanged(auth, (user) => {
     if (user) {
       // User is signed in
       const {uid, email,displayName,photoURL } = user;
       //  adding the user information to redux store
       dispatch(addUser({
         uid:uid,
         email:email,
         displayName:displayName,
         photoURL: photoURL,
       }));
      navigate("/browse");
     } else {
       // User is signed out
       dispatch(removeUser());
       navigate("/")
     }
   });
   return () => unsubscribe();  
  //   Unsubscribing to the above event listener if the component unmounts
  },[]);

const handleSignOut = () => {
  // Calling the sign out api

  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/")
  }).catch((error) => {
    navigate("/error");
  });
}

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
   <img className = 'w-44 mx-auto md:mx-0' src={LOGO} alt='Netflix Logo' />
{
  user &&
   <div className='flex p-2 justify-between gap-2'>

    <img 
      className='hidden md:block w-12 h-12'
      src={user?.photoURL}
     alt='userIcon'
    />
    <button
    className='font-bold text-white bg-red-800 p-1 m-1 rounded-lg' 
     onClick={handleSignOut}>
      LogOut
    </button>
   </div>
   }
    </div>
  )
}

export default Header