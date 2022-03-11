import App from '../client/components/App';


function MyApp({ Component, pageProps }) {
    return (
        <App>
            <Component {...pageProps} />
        </App>
    )
}

export default MyApp;