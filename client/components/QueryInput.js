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


//https://dev.to/glowtoad123/using-codemirror-in-nextjs-without-the-navigator-error-opi
// dynamic(() => {
//   import('codemirror/addon/hint/show-hint');
//   import('codemirror/addon/lint/lint');
//   import('codemirror-graphql/hint');
//   import('codemirror-graphql/lint');
//   import('codemirror-graphql/mode');
// }, { ssr: false })
const samplePlaceholder = `{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}`

function QueryInput() {
  const [query, setQuery] = useState(samplePlaceholder);
  const {codeDispatch} = useContext(QueryContext)

  const queryChangeHandler = (query) => {
    setQuery(query);
  };

  const resetHandler = () => {
    setQuery();
  }

  const submitHandler = () => {
    codeDispatch({
      type: 'UPDATE_RESULT',
      payload: {
        result: query
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
        <Button variant="outlined" onClick={handleClickOpen}>Veiw Schema/Resolver</Button>
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
        value={query}
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