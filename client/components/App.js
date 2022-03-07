import Nav from './Nav'
import Meta from './Meta'
// import styles from '../../styles/App.module.css';

function App({ children }) {
  return (
    <>
    <Meta />
    <Nav />
    <div>
        <main>
            {children}
        </main>
    </div>
    </>
  )
}

export default App