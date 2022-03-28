import React, { useContext, useState, useReducer } from 'react';
import Router from 'next/router'
import GithubIcon from './styles/assets/GithubIcon';
import { StatusContext } from '../context/global-context';
import classes from '../../styles/URILink.module.css'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DialogTitle from '@mui/material/DialogTitle';




const LoginModal = ({closeModal}) => {
  
  const { statusState, statusDispatch } = useContext(StatusContext);


  // const [user, setUsername] = useState('');
  // const [pass, setPassword] = useState('');

  const updateUsername = (username) => {
    statusDispatch({
      type: 'UPDATE_USERNAME',
      payload: {
          username: username
      }
    })
  }

  const updatePassword = (password) => {
    statusDispatch({
      type: 'UPDATE_PASSWORD',
      payload: {
          password: password
      }
    })
  }

const submitUserData = async () => {

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({"username": statusState.username, "password": statusState.password })
    };
  let result;
  result = await fetch("http://localhost:3001/login", requestOptions);
  result = await result.json();

  if (statusState.username === '' || statusState.password === '' || result.loggedin === false) {
    statusDispatch({
      type: 'UPDATE_ENTRY_ERROR',
      payload: {
        entryError: true
      }
    })
  }

  else {
    statusDispatch({
      type: 'UPDATE_STATUS',
      payload: {
          isLoggedIn: result.loggedin,
      }
    })
    statusDispatch({
      type: 'UPDATE_ENTRY_ERROR',
      payload: {
        entryError: false
        }
      })
    }
  
}

const submitOAuthData = () => {
  statusDispatch({
    type: 'UPDATE_STATUS',
    payload: {
        isLoggedIn: true,
    }
  })
}

//redirect page if user is verified and logged in
if (statusState.isLoggedIn && !statusState.entryError){
  console.log(statusState)
  Router.push('http://localhost:3000/main')
} 

    return (
        <div className = {classes.modal} >
          <Box 
            sx={{
              backgroundColor: '#white',
              width: 100,
              height: 500,
            }}
            className='w-screen'
            textAlign='center'
          >
            {statusState.entryError ? 
            <DialogTitle sx={{color: 'red'}}>Username/Password Incorrect. Try Again</DialogTitle> :
            <DialogTitle></DialogTitle> }
            <TextField
              sx={{
                paddingBottom: 1
              }}
              label="Username input"
              type='text'
              value={statusState.username}
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
              value={statusState.password}
              placeholder='Password'
              onChange={(e) => updatePassword(e.target.value)}
              className={classes.InputURI}
              ></TextField>
          
            <div class='flex space-x-4  justify-center'>
              <div class="p-2 flex flex space-x-5">
            
            <button 
              sx={{width: 156}}
              variant="contained" 
              value='submitNew' 
              onClick={submitUserData} 
              class="rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200"
              >Log In</button> 
             
            
            <button 
              sx={{width: 180}}
              variant="contained" 
              value='SubmitOAuth' 
              onClick={() => location.href='http://localhost:3001/github/auth', submitOAuthData} 
              class='p-2 flex rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200'
              >Github<GithubIcon/>
               </button>

               </div>
                  </div>
                    <div class="flex itms-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                  <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                </div>

                <br>
                </br>
                
               <button 
              sx={{width: 156}}
              variant="contained" 
              value='submitNew' 
              // onClick={openLoginModal} 
              class='rounded-2xl border-b-2 border-b-gray-300 bg-white py-2.5 px-4 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200'
              >Sign Up Here</button>
          </Box>
        </div>
      )
}


export default LoginModal;