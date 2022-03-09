import Nav from './Nav'
import Meta from './Meta'
import SideBar from './SideBar'
// import styles from '../../styles/App.module.css';

function App({ children }) {
  return (
    <>
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