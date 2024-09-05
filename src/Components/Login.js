import React, { useState, useRef } from 'react'
import Header from './Header'
import { BG_URL, USER_AVATAR } from '../utils/constants'
import { checkValidateData } from '../utils/validate'
import {auth} from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/slice/userSlice'

const Login = () => {

    const [IsSignInform, setSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // the variables email, password ,name are all objects
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);  

 const handleSubmit = () => {

        // console.log(email+" "+password);
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message); 
        if(message) return;
      // If user input validations passed then proceed
      //while sign up, const user variable contains the details of registration in object form. This user object we get from cloud once we login/signup,it should be pushed to redux store.
      // As soon as the new user is successfully registered, update the profile with name and photo url in firebase. Also update in store too dont forget.
                     // ------------- Sign up form logic, then create new user in firebase ---------------
      if(!IsSignInform){

          createUserWithEmailAndPassword( auth, email.current.value, password.current.value)
               .then((userCredential) => {
                  const user = userCredential.user;    
          updateProfile(user, {
              displayName: name.current.value, 
              photoURL: USER_AVATAR,
            })
// Updating profile will not call onASC automatically so store also not updated with name and photo. so do it explicitly.
              .then(() => {
             const {uid,email,displayName,photoURL} = auth.currentUser;
            //  fetching details of user from firebase freshly i.e., auth and adding to store
              dispatch
              (addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
             }));
            //  navigate("/browse")
            })
            .catch((error) => {
             setErrorMessage(error.message)
            });
            //  console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+ " "+ errorMessage);
          });
      } else {
        //  Sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)

        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ " "+ errorMessage);
        });
      }
 };

 const toggleSignInForm = () => {
  setSignInForm(!IsSignInform);
}

  return (
    <div>
   <Header/>

   {/* ------- Background image ---------- */}
     <div className='absolute'>
        <img
            className='object-cover h-screen w-screen'
            src = {BG_URL} 
            alt='logo'
        />
     </div>

     {/* ------ Form of login or signup -------- */}
     <form
     onSubmit={(e) => e.preventDefault()}
     className=' bg-black bg-opacity-80 md:w-3/12 absolute right-0 left-0 mx-auto text-white p-4 rounded-sm my-36'
     >

     <h1 className='font-bold text-3xl py-4'>
        {
            IsSignInform ? "Sign In" : "Sign In"
        }
     </h1>
        {
            !IsSignInform &&
            <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full py-4 bg-transparent border border-gray-500 p-4 mb-4 rounded-sm"
        />
        }
        <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="w-full py-4 bg-transparent border border-gray-500 p-4 rounded-sm"
        />
        <input
            ref={password}
            type='password'
            placeholder='Password'
            className='w-full py-4 bg-transparent border border-gray-500 p-4 mt-4 mb-4 rounded-sm'
        />
      
        
        <button
        className='bg-red-700 py-4 text-center text-white w-full rounded-md my-4'
        onClick={handleSubmit}
        >
          {
            IsSignInform ? "Sign In" : "Register to Netflix"
          }
        </button>

        <p className='text-red-500 font-bold text-lg py-2'>
        {errorMessage}  </p>

        <p className='text-start py-4 cursor-pointer'
          onClick={toggleSignInForm}>
          {
            IsSignInform ? "New to Netflix? Sign up now." : "Already Registered? Sign In Now"
          }
        </p>

     </form>
    </div>
  )
}

export default Login