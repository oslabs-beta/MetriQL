import { useContext, useReducer } from 'react';
import { SchemaContext, QueryContext, GraphContext } from '../client/context/global-context';
import { initialCodeState, codeReducer, initialSpeedState, speedReducer } from '../client/context/global-reducer';

import Schema from '../client/components/Schema';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';

import classes from '../styles/Main.module.css'

function MainPage() {

  const [codeState, codeDispatch] = useReducer(codeReducer, initialCodeState);

  const [speedState, speedUpdate] = useReducer(speedReducer, initialSpeedState);

  return (
    <div className={classes.main}>
      <Meta title='Work Space' />
      <div className={classes.body}>
        <QueryContext.Provider
          value={{
            codeDispatch,
            speedUpdate, 
            speedState
          }}>
          <QueryInput />
        </QueryContext.Provider>

        <div className={classes.results}>
          <GraphContext.Provider
            value={{
              speedState
            }}>
          <Metric />
          </GraphContext.Provider>

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