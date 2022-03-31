import {
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider, 
    HttpLink, 
    from,
    } from '@apollo/client';

import App from '../client/components/App';

import '../styles/globals.css'

const link = from([
    new HttpLink({ uri: "http://localhost:8080/graphql"})
])
//create apollo client to get graphql data
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})


function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client = {client}>
            <App>
                <Component {...pageProps} />
            </App>
        </ApolloProvider>
    )
}

export default MyApp;