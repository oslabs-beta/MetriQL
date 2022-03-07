import Nav from './Nav'
// import styles from '../styles/App.module.css';

function App({ children }) {
  return (
    <>
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