import { useState, useContext } from 'react';
import { ScehmaContext } from '../context/global-context';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Schema() {
  const [schema, setSchema] = useState();
  const [resolver, setResolver] = useState();
  const [switcher, setSwitcher] = useState(true);

  const switchHandler=() => {
    setSwitcher(!switcher)
  }

  const clickHandler = async () => {
    try {
        const result = await fetch("http://localhost:3001/schema")
        const jsonData = await result.json();
        console.log(jsonData.schema);
        setSchema(jsonData.schema.types)
        setResolver(jsonData.schema.resolvers)
    } catch (err) {
      console.log(err.message)
    }
  }
    // const { scehmaState } = useContext(ScehmaContext);
    // console.log(scehmaState);
    return (
      <div>
        <button onClick={clickHandler}>CLICK!</button>
        <button onClick={switchHandler}>Switch!</button>
        <CodeMirror
          value={switcher?schema:resolver}
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

