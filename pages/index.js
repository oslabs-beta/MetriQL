import Nav from '../client/components/Nav';
import Team from '../client/components/Styles/Team';
import AboutApp from '../client/components/Styles/MainFeature';
import SecondFeature from '../client/components/Styles/SecondFeature';
import Features from '../client/components/Styles/Features';
import ThirdFeature from '../client/components/Styles/ThirdFeature';
import Dialog from '@mui/material/Dialog';
import LoginModal from '../client/components/LoginModal';
import SignupModal from '../client/components/SignUpModal';
import { useState, useEffect, useContext } from 'react';
import { statusReducer, initialStatusState } from '../client/context/global-reducer';
import { StatusContext } from '../client/context/global-context';

function HomePage() {

  const {verifySession} = useContext(StatusContext);

  useEffect(() => {
    verifySession()
  }, [])
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
   setOpen(true)
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <StatusContext.Provider
        value={{
          statusState, 
          statusDispatch
        }}
        > */}
      <Nav openModal={handleClickOpen}/>
      <AboutApp />
      <SecondFeature />
      <ThirdFeature />
      <Features />
      <Team />
        <Dialog open={open}>
            <LoginModal closeModal={handleClose}/>
        </Dialog>
      {/* </StatusContext.Provider> */}
    </div>
  )
}

export default HomePage;