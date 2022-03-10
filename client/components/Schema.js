import { useContext } from 'react';

import { ScehmaContext } from '../context/global-context';

function Schema() {

  const { scehmaState } = useContext(ScehmaContext);
  console.log(scehmaState);
  return (
    <div>
      <h3>Schema logic here</h3>
    </div>
  )
}

export default Schema

