import { useReducer } from 'react';
import Dialog from '@mui/material/Dialog';

import { SchemaContext, QueryContext, GraphContext, URLContext, SidebarContext, HistoryContext } from '../client/context/global-context';
import {
  initialCodeState,
  codeReducer,
  initialSpeedState,
  speedReducer,
  initialURLState,
  urlReducer,
  initialDisplayState,
  displayReducer,
} from "../client/context/global-reducer";
import Header from '../client/components/Header';
import SideBar from '../client/components/SideBar';
import Metric from '../client/components/Metric';
import Meta from '../client/components/Meta';
import QueryInput from '../client/components/QueryInput';
import Result from '../client/components/Result';
import URILink from '../client/components/URILink';
import QueryHistory from '../client/components/QueryHistory';

function MainPage() {

  const [codeState, codeDispatch] = useReducer(codeReducer, initialCodeState);

  const [speedState, speedUpdate] = useReducer(speedReducer, initialSpeedState);

  const [urlState, urlDispatch] = useReducer(urlReducer, initialURLState);

  const [displayState, displayDispatch] = useReducer(displayReducer, initialDisplayState);

  const handleClickOpen = () => {
    displayDispatch({
      type: 'UPDATE_MODAL_DISPLAY',
      payload: true
    })
  };

  const handleClose = () => {
    displayDispatch({
      type: 'UPDATE_MODAL_DISPLAY',
      payload: false
    })
  };


  return (
    <div className='bg-backgroundGrey h-screen'>
      <Header />
      <div >
        <Meta />

        <SidebarContext.Provider
          value={{
            urlState,
            displayState,
            displayDispatch
          }}>
          <SideBar openDB={handleClickOpen} />
        </SidebarContext.Provider>


        <div className='flex place-content-stretch mt-2 justify-evenly -ml-20 '>
          <HistoryContext.Provider
            value={{
              codeState,
              displayState,
              displayDispatch,
              speedState
            }}>
            <div className='flex bg-navBarGrey rounded-lg w-[17vw]'>
              <QueryHistory />
            </div>
          </HistoryContext.Provider>


          <div className='flex bg-navBarGrey p-5 rounded-lg' >
            <QueryContext.Provider
              value={{
                codeState,
                codeDispatch,
                speedUpdate,
                speedState,
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
                  codeDispatch,
                }}>
                <Result />

              </SchemaContext.Provider>

              <URLContext.Provider
                value={{
                  urlState,
                  urlDispatch,
                }}>
                <Dialog open={displayState.URIModal}>
                  <URILink closeHandler={handleClose} />
                </Dialog>
              </URLContext.Provider>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage