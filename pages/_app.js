import {
    ApolloClient, 
    InMemoryCache, 
    ApolloProvider, 
    HttpLink, 
    from,
    } from '@apollo/client';

import App from '../client/components/App';
// import { links } from './utils/links';

const link = from([
    new HttpLink({ uri: "http://localhost:3000/graphql"})
])
//create apollo client for use in getting graphql data
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