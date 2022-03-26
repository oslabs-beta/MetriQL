import React, { useReducer, useEffect } from 'react';
import { StatusContext } from '../client/context/global-context';
import { statusReducer, initialStatusState } from '../client/context/global-reducer';

import App from '../client/components/App';
// import { links } from './utils/links';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

    const [statusState, statusDispatch] = useReducer(statusReducer, initialStatusState);

    const verifySession =  () => {
        fetch('http://localhost:3001/session')
         .then(data => {
           statusDispatch({
             type: 'UPDATE_STATUS',
             payload: {
                 isLoggedIn: data,
             }
           })
           console.log(statusState)
         })
         .catch(err => console.log(`error occurred at verifySession, ${err}`))
        
   }
   
    useEffect(() => {
        verifySession()
    }, [])

    return (
        <StatusContext.Provider
        value={{
            statusState,
            statusDispatch
          }}
            >
            <App>
                <Component {...pageProps} />
            </App>
        </StatusContext.Provider>
    )
}

export default MyApp;