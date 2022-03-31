import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

function Schema({ schema, view }) {

  const viewMaterial = (view === 'types')

  const types = schema.types;
  const resolvers = schema.resolvers;

  return (
    <div>
      <CodeMirror
        value={viewMaterial ? types : resolvers}
        height='45vw'
        width='35vw'
        theme='dark'
        extensions={[javascript({ jsx: true })]}
        editable={false}
      />
    </div>
  )
}

export default Schema

