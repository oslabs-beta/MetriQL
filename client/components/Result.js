import CodeMirror from '@uiw/react-codemirror';
import { oneDark } from '@codemirror/theme-one-dark';
import { javascript } from '@codemirror/lang-javascript';

//need to pass in the value through as props
function Result() {
    return (
      <>
        <CodeMirror
          value = {'Result from query goes here'}
          autoFocus={true}
          height='30rem'
          theme={oneDark}
          extensions={[javascript({ jsx: true })]}
          editable={false}
        />
      </>
    )
  }
  
  export default Result;