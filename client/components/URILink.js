import React, { useContext } from 'react';
import { URLContext } from '../context/global-context';
import { secret } from '../../server/generator/testPSQL';
import cryptoJs from 'crypto-js';

const URILink = () => {

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
    <div>
      <input
        value={urlState.url}
        type='text'
        placeholder='Your Database Link'
        onChange={(event) => urlChangeHandler(event.target.value)}
      />
      <button onClick={submitHandler}>Submit</button> 
      <button onClick={sampleHandler}>Use Sample</button>
    </div>
  )
}

export default URILink;