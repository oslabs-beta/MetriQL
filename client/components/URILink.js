import React, { useContext } from 'react';
import { URLContext } from '../context/global-context';
import { secret } from '../../server/generator/testPSQL';
import cryptoJs from 'crypto-js';
import classes from '../../styles/URILink.module.css'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const URILink = ({ closeHandler }) => {

  const { urlState, urlDispatch } = useContext(URLContext);

  const url = cryptoJs.AES.encrypt(urlState.url, secret).toString();

  const submitHandler = async (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uri: url })
    };
    const result = await fetch("http://localhost:3001/schema", requestOptions);
    const jsonData = await result.json();
    urlDispatch({
      type: 'UPDATE_SCHEMA',
      payload: {
        types: jsonData.schema.types,
        resolvers: jsonData.schema.resolvers
      }
    });
    return closeHandler();
  };

  const sampleHandler = async (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    const result = await fetch("http://localhost:3001/schema", requestOptions);
    const jsonData = await result.json();
    urlDispatch({
      type: 'UPDATE_SCHEMA',
      payload: {
        types: jsonData.schema.types,
        resolvers: jsonData.schema.resolvers
      }
    });
    return closeHandler();
  };

  const urlChangeHandler = (value) => {
    urlDispatch({
      type: 'UPDATE_URL',
      payload: {
        url: value
      }
    });
  }

  return (
    <div className = {classes.modal}>
      <Box 
        className='w-screen'
        textAlign='center'
      >
        <br/>
      <h3 class="text-xl font-medium text-gray-900 dark:text-black">Submit URI</h3>
      <br/>
      <form class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" action="#">
        <TextField
        label="Database Link"
        value={urlState.url}
        type='text'
        placeholder='Your Database Link'
        onChange={(event) => urlChangeHandler(event.target.value)}
        className={classes.InputURI}
      ></TextField>
      <br/>
      <br/>
      <button variant="contained" onClick={submitHandler} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> 
      <br/>
      <br/>
      <hr style={{width: '95%'}}/>
      <br/>
      <button 
      class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      variant="contained" onClick={sampleHandler}>Use Sample</button>
      </form>
      </Box>
    </div>
  )
};

export default URILink;