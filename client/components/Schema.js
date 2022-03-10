import { useContext } from 'react';
import { ScehmaContext } from '../context/global-context';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Schema() {

  // const { scehmaState } = useContext(ScehmaContext);
  // console.log(scehmaState);
  return (
    <div>
      <CodeMirror
        value={'sup'}
        height='50rem'
        width='40rem'
        theme='dark'
        extensions={[javascript({ jsx: true })]}
        editable={false}
      />
    </div>
  )
}

export default Schema

