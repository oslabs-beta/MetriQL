import App from '../client/components/App';
// here we import GlobalState and wrap the entire App in it to provide our context everywhere...
import GlobalState from '../client/context/GlobalState.js'


function MyApp({ Component, pageProps }) {
    return (
        <GlobalState>
            <App>
                <Component {...pageProps} />
            </App>
        </GlobalState>
    )
}

export default MyApp;