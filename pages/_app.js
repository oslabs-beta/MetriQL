import React, { useReducer, useState } from 'react';
import { StatusContext } from '../client/context/global-context';
import { statusReducer, initialStatusState } from '../client/context/global-reducer';

import App from '../client/components/App';
// import { links } from './utils/links';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
    
    const [statusState, statusDispatch] = useReducer(statusReducer, initialStatusState);
    const [status, setStatus] = useState(false);
    
    const verifySession =  () => {
        fetch('http://localhost:3001/session')
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setStatus(data)
        })
        .catch(err => console.log(`error occurred at verifySession, ${err}`))
        }
        
    return (
        <StatusContext.Provider 
            value={{
            statusState,
            statusDispatch,
            status, 
            setStatus, 
            verifySession}}>
                <App>
                    <Component {...pageProps} />
                </App>
        </StatusContext.Provider>
    )
}

export default MyApp;