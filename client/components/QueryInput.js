import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState, useContext } from 'react'
import classes from '../../styles/QueryInput.module.css'
import { QueryContext } from '../context/global-context';
// import dynamic from 'next/dynamic';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import Schema from './Schema';
import { GraphContext } from '../context/global-context';

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
  const {codeDispatch, speedUpdate, speedState} = useContext(QueryContext);

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
      body: JSON.stringify({query:`${queryInput}`})
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
        result: cleanResponse //or should it json'd outcome from fetch call??
      }
    })
  }
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  return (
    <div>
      <div className={classes.heading}>
        <p className={classes.title}>Query Input</p>
        <Button variant="outlined" onClick={handleClickOpen}>View Schema/Resolver</Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <Schema />
        </BootstrapDialog>

        <div >
          <button
            type='button'
            className={classes.submitBtn}
            onClick={submitHandler}
          >Submit</button>
          <button
            type='button'
            className={classes.resetBtn}
            onClick={resetHandler}
          >Reset</button>
        </div>
      </div>

      <CodeMirror
      className={classes.input}
        value={queryInput}
        height='50rem'
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