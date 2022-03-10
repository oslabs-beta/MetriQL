// This is the actual context COMPONENT that will be rendered, and then wrapped around other components that need context and dispatch, in our case that will be the whole App
// we will import this into App.js and wrap the whole App in it
import React, { useReducer } from 'react';
// import the contexts we created, the reducer we made, and the actions we made
import { GlobalContext, GlobalDispatch } from './global-context';
import globalReducer from './global-reducer'
import { LOGIN, LOGOUT } from './global-actions'

const GlobalState = ({ children }) => {

    // Here we define top-level functions that we will pass to App via our context provider
    // Log In
    const login = (username, password) => {
        dispatch({
            type: LOGIN,
            payload: { username: username, password: password }
        })
    }

    // Log Out
    const logout = () => {
        dispatch({
            type: LOGOUT,
        })
    }

    // declare a default state, including the functions you defined
    const initialState = {
        isLoggedIn: false,
        username: '',
        password: '',
        login,
        logout
    }
    
    // useReducer takes our reducer function and the initial state, and returns the new state and a dispatch function
    const [state, dispatch] = useReducer(globalReducer, initialState);

    return (
        <GlobalContext.Provider value={{state}}>
            <GlobalDispatch.Provider value={{dispatch}}>
                { children }
            </GlobalDispatch.Provider>
        </GlobalContext.Provider>
    )
}

export default GlobalState;