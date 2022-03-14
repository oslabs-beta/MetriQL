import { useContext, useReducer } from 'react';
import { SchemaContext, QueryContext, GraphContext, URLContext } from '../client/context/global-context';
import { initialCodeState, codeReducer, initialSpeedState, speedReducer, initialURLState, urlReducer } from '../client/context/global-reducer';

import Schema from '../client/components/Schema';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';
import URILink from '../client/components/URILink';

import classes from '../styles/Main.module.css'

function MainPage() {

  const [codeState, codeDispatch] = useReducer(codeReducer, initialCodeState);

  const [speedState, speedUpdate] = useReducer(speedReducer, initialSpeedState);

  const [urlState, urlDispatch] = useReducer(urlReducer, initialURLState)

  return (
    <div className={classes.main}>
      <Meta title='Work Space' />
      <URLContext.Provider
        value={{
          urlState,
          urlDispatch
        }}>
        <URILink />
      </URLContext.Provider>
      <div className={classes.body}>
        <QueryContext.Provider
          value={{
            codeDispatch,
            speedUpdate,
            speedState,
            urlState
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