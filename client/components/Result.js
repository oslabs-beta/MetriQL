import { useContext } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { dark } from '@material-ui/core/styles/createPalette';

import {SchemaContext} from '../context/global-context'
function Result() {

  const {codeState} = useContext(SchemaContext)

    return (
      <>
        <CodeMirror
          value = {codeState.result}
          autoFocus={true}
          height='25vw'
          width= '30vw'
          theme='dark'
          extensions={[javascript({ jsx: true })]}
          editable={false}
        />
      </>
    )
  }
  
  export default Result;