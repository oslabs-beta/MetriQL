// import React, { useContext, useState } from 'react';
// import Link from 'next/link'
// import GithubIcon from './styles/assets/GithubIcon';

// import classes from '../../styles/URILink.module.css'
// import { GlobalContext } from '../context/global-context';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import DialogTitle from '@mui/material/DialogTitle';




// const SignupModal = ({closeModal}) => {

//   // const { dispatch } = useContext(GlobalContext);
//   const [errorNoEntry, setErrorNoEntry] = useState(false); // to test if user tries to submit without entering any text

//   const [user, setUsername] = useState('');
//   const [pass, setPassword] = useState('');

//   const updateUsername = (password) => {
//     setUsername(password)
//     setErrorNoEntry(false);
//     }
//   const updatePassword = (username) => {
//         setPassword(username)
//         setErrorNoEntry(false);
//     }
//     // const usernameChange = e => {
//     //   setUsername(e.target.value);
//     //   setErrorNoEntry(false);
//     // }

//     // const passwordChange = e => {
//     //   setPassword(e.target.value);
//     //   setErrorNoEntry(false);
//     // }

// const submitNewUser = async (e) => {
//   e.preventDefault();
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({"username": user, "password": pass })
//   };
// let result;
// result = await fetch("http://localhost:3001/login", requestOptions);
// result = await result.json();
// console.log(result.loggedin)
// // dispatch({
// //     type: 'LOGIN',
// //     payload: {
// //         isLoggedin: result.Loggedin,
// //         username: user //or could also be deconstructed off of returned result 
// //     }
// //   })
//   return closeModal();
// }


//     return (
//         <div className = {classes.modal} >
//           <Box 
//             sx={{
//               backgroundColor: '#FAF9F6',
//               width: 100,
//               height: 500,
//             }}
//             className='w-screen'
//             textAlign='center'
//           >
//             {errorNoEntry ? 
//             <DialogTitle sx={{color: 'red'}}>Please enter your login information</DialogTitle> :
//             <DialogTitle>Login Here!</DialogTitle> }
//             <TextField
//               sx={{
//                 paddingBottom: 1
//               }}
//               label="Username input"
//               type='text'
//               value={user}
//               placeholder='Username'
//               onChange={(e) => updateUsername(e.target.value)}
//               className={classes.InputURI}
//               ></TextField>

//               <TextField
//               sx={{
//                 paddingBottom: 1
//               }}
//               label="Password Input"
//               type='text'
//               value={pass}
//               placeholder='Password'
//               onChange={(e) => updatePassword(e.target.value)}
//               className={classes.InputURI}
//               ></TextField>
    
//             <button 
//               sx={{width: 156}}
//               variant="contained" 
//               value='submitNewUser' 
//               onClick={submitNewUser} 
//               class='mb-6 bg-purple hover:bg-purple1 text-white font-bold py-2 px-4 rounded'
//               >
//                 Log In</button>
//               <br>
//               </br>
//           </Box>
//         </div>
//       )
// }


// export default SignupModal;