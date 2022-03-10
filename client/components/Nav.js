import React, { useContext, useState } from 'react';
import {GlobalContext, GlobalDispatch} from '../context/global-context';
import GlobalState from '../context/GlobalState';
import {LOGIN, LOGOUT} from '../context/global-actions';
import Link from 'next/link'

function Nav () {

  const {state, login, logout} = useContext(GlobalContext);
  const {dispatch} = useContext(GlobalDispatch);

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

  console.log('state ', state);
  console.log('dispatch ', dispatch);


  return (
    <>
    <nav>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/about'>About</Link>
            </li>
            <li>
                <Link href='/main'>Tool</Link>
            </li>
        </ul>
    </nav>

    {
    state.isLoggedIn ? 
        <button onClick={()=>logout()}>Log Out</button> : 
        <form>
            <input type='text' name='username' placeholder='username' onChange={onChangeHandler}></input>
            <input type='text' name='password' placeholder='password' onChange={onChangeHandler}></input>
            <button type='button' onClick={onSubmitHandler}>Log In</button>
        </form>
    }
    </>
  )
}

export default Nav;