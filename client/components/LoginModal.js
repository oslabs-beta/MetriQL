import React, { useContext, useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { GlobalContext } from '../context/global-context';

function LoginModal() {

    const PORT = 3001;

  // const router = useRouter();

  // for each component that needs access to state, you have to pass the imported GlobalContext (and GlobalDispatch if needed) into useContext
  // then you assign them to {state} and {dispatch} respectively
  // from there you can access any properties on the state object as defined in GlobalState.js
  // you can also dispatch actions as defined in global-reducer.js (and action.js)
  const {state} = useContext(GlobalContext);
  // const {dispatch} = useContext(GlobalDispatch);

  // now you can destructure properties out of the state object to make them easier to use
  const {login, logout, isLoggedIn} = state

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  function onChangeHandler(e) {
    e.preventDefault;
    e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value);
  }
  
  function onSubmitHandler(e) {
      e.preventDefault;
      login(username, password);
  }
  
//   console.log('state ', state);
  
  return (
    <div>
        <h2>Welcome to MetricQL</h2>

        {/* check girafffeql/components/index/LoginModal line 21 for Link element redirect method... */}
        <Link href={process.env.NODE_ENV === 'development' ? `http://localhost:${PORT}/auth/github` : `https://metriql.io/auth/github`}>
            <button>Sign in with Github</button>
        </Link>

        {/* check girafffeql/components/index/LoginModal line 27 for router.push method... */}
        <button onClick={()=>console.log('no login, send guest to main page')}>Continue as a Guest</button>

        {/* if we want to offer guests option to create account with username/password we can do that... */}
        {/* <form>
            <input type='text' name='username' placeholder='username' onChange={onChangeHandler}></input>
            <input type='password' name='password' placeholder='password' onChange={onChangeHandler}></input>
            <button type='button' onClick={onSubmitHandler}>Log In</button>
        </form> */}
    </div>  
  )
}

export default LoginModal