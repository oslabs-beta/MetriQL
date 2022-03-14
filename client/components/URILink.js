import React, {useContext} from 'react';
import { URLContext } from '../context/global-context';

// import CrytoJS from 'cryto-js';
// require('dotenv').config();

const URILink = () => {

  const { urlState, urlDispatch } = useContext(URLContext);

  const submitHandler = (e) => {
    console.log(urlState.url);
    // const url = CryptoJS.AES.encrypt(link.value, process.env.secretKey).toString();

  };

  const urlChangeHandler = (e) => {
    urlDispatch({
      type: 'UPDATE_URL',
      payload: {
        url: e
      }
    });
  }

  return (
    <div>
      <input
        value={urlState.url}
        type='text'
        placeholder='Your Database Link'
        onChange={(event) => urlChangeHandler(event.target.value)}
      />
      <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default URILink;