import React, { useContext } from 'react';
import { GlobalContext, GlobalDispatch } from '../context/global-context';
import {useRouter} from 'next/router';

function UserProfile() {

    const PORT = 3001;
    const router = useRouter();

    const {state} = useContext(GlobalContext);
    const {dispatch} = useContext(GlobalDispatch);

    const {isLoggedIn, login, logout} = state;

    function handleClick() {
        if (isLoggedIn) {
            logout();
        } else {
            router.push(process.env.NODE_ENV === 'development' ? `http://localhost:${PORT}/auth/github` : `https://metriql.io/auth/github`)
        }
    }

    return (
        <div style={{backgroundColor: 'lightblue'}}>
            <h4>User Profile Dropdown Menu</h4>
            <button onClick={handleClick}>{isLoggedIn ? 'Log out' : 'Sign in'}</button>
        </div>
    )
}

export default UserProfile