import { useReducer, useState } from 'react';
import { SchemaContext, QueryContext, GraphContext, URLContext } from '../client/context/global-context';
import { initialCodeState, codeReducer, initialSpeedState, speedReducer, initialURLState, urlReducer } from '../client/context/global-reducer';

import Header from '../client/components/Header';
import SideBar from '../client/components/SideBar';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';
import URILink from '../client/components/URILink';
import QueryHistory from '../client/components/QueryHistory';
import Dialog from '@mui/material/Dialog';


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
    <div className='bg-slate-400 h-screen'>
      <Header />
      <div >
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

        <QueryContext.Provider
          value={{
            urlState
          }}>
          <SideBar openDB={handleClickOpen} />
        </QueryContext.Provider>
        <div className='flex place-content-center mt-2 justify-evenly -ml-14'>

          <QueryHistory />

          <div className='flex bg-slate-300 p-5 ml-60 rounded' >
            <QueryContext.Provider
              value={{
                codeDispatch,
                speedUpdate,
                speedState,
                urlState
              }}>
              <QueryInput />
            </QueryContext.Provider>

            <div className='flex flex-col ml-10 w-200'>
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
    </div>
  )
}

export default MainPage