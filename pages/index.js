import LoginModal from '../client/components/LoginModal';
import { useContext, useState } from 'react';
import {GlobalContext, GlobalDispatch} from '../client/context/global-context';

function HomePage() {

  const {state} = useContext(GlobalContext);
  const {dispatch} = useContext(GlobalDispatch);

  const [showModal, toggleShowModal] = useState(false);

  const {isLoggedIn} = state;

  function handleClick() {
    if (isLoggedIn) {
      console.log('Logged In, proceed to main page!');
    } else {
      toggleShowModal(true);
    }
  }

    return (
    <>
      {/* this text/component should also be blurred when modal pops up, see below */}
      <h1>Welcome to MetriQL!</h1>

      {showModal && <LoginModal />}

      {/* following 2 lines of code are from giraffeql/pages/index.js line 84 and 86 */}
      <div id='preventClick' onClick={() => toggleShowModal(false)} style={{width: '100vw', height: '100vh', position: 'fixed', zIndex: `${showModal ? '50' : '-10'}`, backgroundColor: `${showModal ? 'rgba(0,0,0,.25)' : 'transparent'}`}} />
      <div id='blur' style={{filter: `${showModal ? 'blur(5px)' : ''}`}}>
        (When you click the "Get Started" button, a modal will pop up, and any page content inside this div will get blurred)
        <div>
          <button onClick={handleClick}>Get Started</button>
        </div>
      </div>
    </>
    )
  }
  
  export default HomePage;