import React, { useContext, useState } from 'react';
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

  const { urlDispatch } = useContext(URLContext);

  const [errorNoEntry, setErrorNoEntry] = useState(false);
  const [errorInvalidResponse, setErroryInvalidResponse] = useState(false);

  const [newUrl, setNewUrl] = useState('')

  const handleChange = e => {
    setNewUrl(e.target.value);
    setErrorNoEntry(false);
    setErroryInvalidResponse(false);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    if (e.target.value === 'submitNew') {
      if (newUrl) {
        // i think we should sanitize newUrl against SQL injections
        let encryptedUrl = cryptoJs.AES.encrypt(newUrl, secret).toString();
        requestOptions.body = JSON.stringify({ uri: encryptedUrl });
        urlDispatch({
          type: 'UPDATE_URL',
          payload: {
            url: encryptedUrl
          }
        });
      } else {
        setErrorNoEntry(true);
        return; // so rest of this function does not execute
      }
    }
    const result = await fetch("http://localhost:3001/schema", requestOptions);
    const jsonData = await result.json();
    console.log('schema.types ', jsonData)
    if (!jsonData.schema) {
      setNewUrl('');
      setErroryInvalidResponse(true);
    } else { 
    urlDispatch({
      type: 'UPDATE_SCHEMA',
      payload: {
        types: jsonData.schema.types,
        resolvers: jsonData.schema.resolvers
      }
    })
    return closeHandler();
    };
  };

  return (
    <div className = {classes.modal}>
      <Box 
        className='w-screen'
        textAlign='center'
        // style={{width: '40vw', height: '26vw'}}
      >
        <DialogTitle>Submit URI</DialogTitle>
        <div><h6>                            </h6></div>
        {errorNoEntry && <div><h6>Please enter your own database URL</h6><h6>or press the other button to use our default database</h6></div>}
        {errorInvalidResponse && <div><h6>Please enter a valid database URL</h6></div>}
          <TextField
          label="Database Link"
          type='text'
          value={newUrl}
          placeholder='Your Database Link'
          onChange={handleChange}
          className={classes.InputURI}
        ></TextField>

        <Button variant="contained" value='submitNew' onClick={submitHandler} >Submit</Button>

        {/* * * * * Disable default button if user inputs text * * * * */}
        {/* {newUrl ? 
          <Button disabled>Use Default BD</Button> : 
          <Button variant="contained" value='submitDefault' onClick={submitHandler} >Use Default DB</Button> 
        } */}

        {/* * * * * Remove default button if user inputs text * * * * */}
        {!newUrl &&
          <Button variant="contained" value='submitDefault' onClick={submitHandler} >Use Default DB</Button> 
        }
      </Box>
    </div>
  )
};

export default URILink;