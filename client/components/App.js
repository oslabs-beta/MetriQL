import Nav from './Nav'
import Meta from './Meta'
import SideBar from './SideBar'
// import styles from '../../styles/App.module.css';

// here we import GlobalState and wrap the entire App in it to provide our context everywhere...
import GlobalState from '../context/GlobalState.js'

function App({ children }) {

  return (
    <>
    {/* <Nav /> */}
    <Meta />
    <SideBar />
    <div>
        <main>
            {children}
        </main>
    </div>
    </>
  )
}

export default App