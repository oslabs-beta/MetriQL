import React, { useContext, useState } from 'react';
import { URLContext } from '../context/global-context';

import { secret } from '../../server/generator/testPSQL';
import cryptoJs from 'crypto-js';
import classes from '../../styles/URILink.module.css'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const URILink = ({closeHandler}) => {

  const { urlDispatch } = useContext(URLContext);

  const [errorNoEntry, setErrorNoEntry] = useState(false); // to test if user tries to submit without entering any text
  const [errorInvalidResponse, setErroryInvalidResponse] = useState(false); // to test if user enters invalid URL

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
    if (e.target.value === 'submitNew' || e.key === 'Enter') {
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
        return; // returning so that the rest of this function does not execute
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
    <div className = {classes.modal} >
      <Box 
        sx={{
          backgroundColor: 'rgb(230, 230, 230)',
          width: 400,
          height: 250,
        }}
        className='w-screen'
        textAlign='center'
      >
        {errorInvalidResponse ? 
        <DialogTitle sx={{color: 'red'}}>Please submit a valid URL</DialogTitle> :
        <DialogTitle>Enter your Database URL</DialogTitle> }
        <TextField
          sx={{
            paddingBottom: 1
          }}
          label="Database Link"
          type='text'
          value={newUrl}
          placeholder='Your Database Link'
          onChange={handleChange}
          className={classes.InputURI}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              submitHandler(e);
            }}}
          ></TextField>

        <Button 
          sx={{width: 156}}
          variant="contained" 
          value='submitNew' 
          onClick={submitHandler} 
          >Submit URL</Button>
          <hr />
          {errorNoEntry ? 
            <DialogContent sx={{marginTop: -3, color: 'red', font: 'sans-serif'}}>Press "Use Default DB" to use our default database</DialogContent>:
            <DialogContent sx={{marginTop: -3, font: 'sans-serif'}}>Press "Use Default DB" to use our default database</DialogContent>}

        {/* * * * * Disable Use Default DB button if user inputs text * * * * */}
        {/* {newUrl ? 
          <Button sx={{width: 156, marginTop: -2}} disabled>Use Default DB</Button> : 
          <Button sx={{width: 156, marginTop: -2}} variant="contained" value='submitDefault' onClick={submitHandler} >Use Default DB</Button> 
        } */}

        {/* * * * * Remove Use Default DB button if user inputs text * * * * */}
        {/* {!newUrl &&
          <Button sx={{width: 156}} variant="contained" value='submitDefault' onClick={submitHandler} >Use Default DB</Button> 
        } */}

        {/* * * * * Always see Use Default DB button  * * * * */}
        <Button sx={{width: 156, marginTop: -2}} variant="contained" value='submitDefault' onClick={submitHandler} >Use Default DB</Button> 
      </Box>
    </div>
  )
};

export default URILink;