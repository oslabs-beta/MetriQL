import React, { useContext, useState } from 'react';
import Link from 'next/link'
import GithubIcon from './styles/assets/GithubIcon';
import { StatusContext } from '../context/global-context';
import classes from '../../styles/URILink.module.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';




const LoginModal = ({closeModal}) => {
  
  const openSignupModal = () => {
    return openSignup();
  }

  const { statusState, statusDispatch } = useContext(StatusContext);
  const [errorNoEntry, setErrorNoEntry] = useState(false); // to test if user tries to submit without entering any text

  const [user, setUsername] = useState('');
  const [pass, setPassword] = useState('');

  const updateUsername = (password) => {
    setUsername(password)
    }
  const updatePassword = (username) => {
        setPassword(username)
    }

const submitUserData = async (e) => {
  e.preventDefault();
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({"username": user, "password": pass })
  };
let result;
result = await fetch("http://localhost:3001/login", requestOptions);
result = await result.json();

statusDispatch({
    type: 'UPDATE_STATUS',
    payload: {
        isLoggedIn: result.loggedin,
        username: result.username 
    }
  })
  console.log(statusState)
  return closeModal();
}

//create conditional for box to dissapear or shake STYLE BUTTONS, Sign up modal
    return (
        <div className = {classes.modal} >
          {/* <div class="min-h-screen flex justify-center items-center bg-white"> */}
          <Box 
            sx={{
              backgroundColor: '#white',
              width: 100,
              height: 500,
            }}
            className='w-screen'
            textAlign='center'
          >
            {errorNoEntry ? 
            <DialogTitle sx={{color: 'red'}}>Please enter your login information</DialogTitle> :
            <DialogTitle></DialogTitle> }
            <TextField
              sx={{
                paddingBottom: 1
              }}
              label="Username input"
              type='text'
              value={user}
              placeholder='Username'
              onChange={(e) => updateUsername(e.target.value)}
              className={classes.InputURI}
              ></TextField>

              <TextField
              sx={{
                paddingBottom: 1
              }}
              label="Password Input"
              type='password'
              value={pass}
              placeholder='Password'
              onChange={(e) => updatePassword(e.target.value)}
              className={classes.InputURI}
              ></TextField>

            <div class='flex itms-center justify-center'>
              <div class="p-2 flex">
            <button 
              sx={{width: 156}}
              variant="contained" 
              value='submitNew' 
              onClick={submitUserData} 
              class="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >
                Log In</button>
             
            <button 
              sx={{width: 180}}
              variant="contained" 
              value='SubmitOAuth' 
              //func to take do OAuth in onClik
              onClick={submitUserData} 
              class='p-2 flex rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200'
              >Github<GithubIcon/>
               </button>
               </div>
            </div>

                <br>
                </br>
               <div class="flex itms-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                   <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                </div>
                <br>
                </br>
               <button 
              sx={{width: 156}}
              variant="contained" 
              value='submitNew' 
              onClick={openSignupModal} 
              class='rounded-2xl border-b-2 border-b-gray-300 bg-purple1 py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200'
              >Sign Up Here</button>
          </Box>
        </div>
      )
}


export default LoginModal;