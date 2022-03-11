import { useContext } from 'react';
import {SchemaContext} from '../context/global-context'

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dark } from '@material-ui/core/styles/createPalette';

//need to pass in the value through as props
function Result() {

  const {codeState, codeDispatch} = useContext(SchemaContext)

    return (
      <>
        <CodeMirror
          id='unstyledcode'
          value = {codeState.result}
          autoFocus={true}
          height='30rem'
          theme='dark'
          extensions={[javascript({ jsx: true })]}
          editable={false}
        />
        {/* <button onClick={() => navigator.clipboard.writeText(document.getElementById('unstyledcode').innerText)} >Copy</button> */}
      </>
    )
  }
  
  export default Result;