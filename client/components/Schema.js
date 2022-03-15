import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Schema({schema, view}) {

  const viewMaterial = (view === 'types')

  const types = schema.types;
  const resolvers = schema.resolvers;

    return (
      <div>
        {/* <button onClick={clickHandler}>CLICK!</button> */}
        <CodeMirror
          value={viewMaterial? types : resolvers}
          height='50rem'
          width='50rem'
          theme='dark'
          extensions={[javascript({ jsx: true })]}
          editable={false}
        />
      </div>
    )
  }

  export default Schema

