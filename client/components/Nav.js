// Whenever we create a component that needs access to state, we must import useContext from react
// we also need to import {GlobalContext, GlobalDispatch} from '/context/global-context' for the state and the dispatch functions respectively
import React, { useContext, useState } from 'react';
import {GlobalContext, GlobalDispatch} from '../context/global-context';
import GlobalState from '../context/GlobalState';
import {LOGIN, LOGOUT} from '../context/global-actions';
import Link from 'next/link'
import UserProfile from './UserProfile';

function Nav () {

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
            <UserProfile />
        </ul>
    </nav>
    </>
  )
}

export default Nav;