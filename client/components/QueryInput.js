import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState, useContext } from 'react'
import { QueryContext } from '../context/global-context';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// import dynamic from 'next/dynamic';
//https://dev.to/glowtoad123/using-codemirror-in-nextjs-without-the-navigator-error-opi
// dynamic(() => {
//   import('codemirror/addon/hint/show-hint');
//   import('codemirror/addon/lint/lint');
//   import('codemirror-graphql/hint');
//   import('codemirror-graphql/lint');
//   import('codemirror-graphql/mode');
// }, { ssr: false })
const samplePlaceholder = `query {
	people {
	  gender
	  height
	  mass
	  hair_color
	  skin_color
	  eye_color
	  birth_year
	}
}`


function QueryInput() {
  //change query to queryInput to not use graphql keyword 
  const [queryInput, setQuery] = useState(samplePlaceholder);
  const { codeDispatch, speedUpdate, speedState } = useContext(QueryContext);


  const queryChangeHandler = (queryInput) => {
    setQuery(queryInput);
  };

  const resetHandler = () => {
    setQuery();
  }


  const submitHandler = async () => {

    // const [speedArr, setSpeedArr] = useState([]);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `${queryInput}` })
    };
    const start = performance.now();
    const result = await fetch("http://localhost:3001/graphql", requestOptions) //create toggle between /schema and schema-user
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
    console.log(speedUpdate)

    codeDispatch({
      type: 'UPDATE_RESULT',
      payload: {
        query: queryInput,
        result: cleanResponse
      }
    })
  }


  return (
    <div className='mt-4'>
      <div className='flex justify-between w-[40rem]'>
        <p className=" text-white1 font-bold text-2xl">Query Input</p>

        <Stack spacing={2} direction="row">
          <Button
            className='text-white1 bg-purple hover:text-white hover:bg-purple1'
            variant="contained"
            color='success'
            onClick={submitHandler}
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
        value={queryInput}
        height='44rem'
        theme='dark'
        extensions={[javascript({ jsx: true })]}
        onChange={(e) => {
          queryChangeHandler(e);
        }}
      />
    </div>
  )
}

export default QueryInput;