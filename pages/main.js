import { useContext, useReducer } from 'react';
import { SchemaContext, QueryContext } from '../client/context/global-context';
import { initialCodeState, codeReducer } from '../client/context/global-reducer';

import Schema from '../client/components/Schema';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';

import classes from '../styles/Main.module.css'

function MainPage() {

  const [codeState, codeDispatch] = useReducer(codeReducer, initialCodeState)

  return (
    <div className={classes.main}>
      <Meta title='Work Space' />
      {/* <Schema /> */}
      <div className={classes.body}>
        <QueryContext.Provider
          value={{
            codeDispatch
          }}>
          <QueryInput />
        </QueryContext.Provider>
        <div className={classes.results}>
          <Metric />
          <SchemaContext.Provider
            value={{
              codeState,
              codeDispatch
            }}>
            <Result />
          </SchemaContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default MainPage