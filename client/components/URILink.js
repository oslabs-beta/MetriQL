import React, { useContext } from 'react';
import { URLContext } from '../context/global-context';
import { secret } from '../../server/generator/testPSQL';
import cryptoJs from 'crypto-js';
import classes from '../../styles/URILink.module.css'

import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';



const URILink = ({closeHandler}) => {

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
      // style={{width: '40vw', height: '26vw'}}
      >
      <DialogTitle>Submit URI</DialogTitle>
        <TextField
        label="Database Link"
        value={urlState.url}
        type='text'
        placeholder='Your Database Link'
        onChange={(event) => urlChangeHandler(event.target.value)}
        className={classes.InputURI}
      ></TextField>
      <br/>
      <br />
      <Button variant="contained" onClick={submitHandler} >Submit</Button> 
      <br/>
      <br/>
      <hr style={{width: '95%'}}/>
      <br/>
      <br />
      <Button variant="contained" onClick={sampleHandler} >Use Sample</Button>
      </Box>
    </div>
  )
};

export default URILink;