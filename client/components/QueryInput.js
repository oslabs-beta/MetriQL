import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { useState, useContext } from 'react'
import classes from '../../styles/QueryInput.module.css'
import { QueryContext } from '../context/global-context';
// import dynamic from 'next/dynamic';


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

  return (
    <div>
      <div className={classes.heading}>
        <p>Query Input</p>
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