import { useContext, useReducer, useState } from 'react';
import { SchemaContext, QueryContext, GraphContext, URLContext } from '../client/context/global-context';
import { initialCodeState, codeReducer, initialSpeedState, speedReducer, initialURLState, urlReducer } from '../client/context/global-reducer';

import Header from '../client/components/Header';
import SideBar from '../client/components/SideBar';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';
import URILink from '../client/components/URILink';
import Dialog from '@mui/material/Dialog';

import classes from '../styles/Main.module.css'


function MainPage() {

  const [codeState, codeDispatch] = useReducer(codeReducer, initialCodeState);

  const [speedState, speedUpdate] = useReducer(speedReducer, initialSpeedState);

  const [urlState, urlDispatch] = useReducer(urlReducer, initialURLState);

  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Header />
      <div className={classes.main}>
        <Meta title='Work Space' />
        <URLContext.Provider
          value={{
            urlState,
            urlDispatch
          }}>
          <Dialog open={open}>
            <URILink closeHandler={handleClose} />
          </Dialog>
        </URLContext.Provider>
        <div className={classes.body}>
          <QueryContext.Provider
            value={{
              codeDispatch,
              speedUpdate,
              speedState,
              urlState
            }}>
            <SideBar openDB={handleClickOpen} />
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
    </div>
  )
}

export default MainPage