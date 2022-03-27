import React, { useReducer, useEffect } from 'react';
import { StatusContext } from '../client/context/global-context';
import { statusReducer, initialStatusState } from '../client/context/global-reducer';

import App from '../client/components/App';
// import { links } from './utils/links';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

    return (
            <App>
                <Component {...pageProps} />
            </App>
    )
}

export default MyApp;