import { useContext } from 'react'
import CodeMirror, {placeholder} from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { QueryContext } from '../context/global-context';


function QueryInput() {

  const { codeState, codeDispatch, speedUpdate, speedState } = useContext(QueryContext);

  const queryChangeHandler = (value) => {
    codeDispatch({
      type: 'UPDATE_QUERY_INPUT',
      payload: {
        queryInput: value
      }
    });
  };

  const resetHandler = () => {
    codeDispatch({
      type: 'UPDATE_QUERY_INPUT',
      payload: {
        queryInput: ''
      }
    })
  };

  const submitHandler = async () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `${codeState.queryInput}` })
    };

    if (speedState.firstQuery) {
      const firstRun = await fetch("http://localhost:8080/graphql", requestOptions)

      speedUpdate({
        type: 'UPDATE_FIRST_QUERY',
        payload: false
      });

    };



    const start = performance.now();
    const result = await fetch("http://localhost:8080/graphql", requestOptions) //create toggle between /schema and schema-user
    const jsonData = await result.json();
    const cleanResponse = JSON.stringify(jsonData, null, 2)
    const end = performance.now();

    const time = end - start;

    speedUpdate({
      type: 'UPDATE_SPEED',
      payload: {
        speed: [...speedState.speed, time]
      }
    });

    codeDispatch({
      type: 'UPDATE_RESULT',
      payload: {
        query: codeState.queryInput,
        result: cleanResponse
      }
    });

  }

  return (
    <div className='mt-4'>
      <div className='flex justify-between w-[33vw]'>
        <p className=" text-white1 font-bold text-2xl">Query Input</p>

        <Stack spacing={2} direction="row">
          <Button
            className='text-white1 bg-purple hover:text-white hover:bg-purple1'
            variant="contained"
            color='success'
            onClick={submitHandler}
            disabled={codeState.queryInput.length === 0}
          >Submit</Button>

          <Button
            variant="outlined"
            color="error"
            onClick={resetHandler}
          >Reset</Button>
        </Stack>
      </div>

      <CodeMirror
        className='mt-3'
        value={codeState.queryInput}
        height='39vw'
        theme='dark'
        extensions={[javascript({ jsx: true }), placeholder('Please enter your query here.')]}
        onChange={(e) => {
          queryChangeHandler(e);
        }}
      />
    </div>

  )
}

export default QueryInput;