// import {ApolloLink, from, HttpLink} from '@apollo/client';

// const ForwardExtensionsLink = new ApolloLink((operation, forward) =>
//   forward(operation).map(response => {
//     NEED FUNCTION TO PROPERLY ALTER DATA
//     }
//     return response;
//   })
// );

// const httpLink = new HttpLink({
//   uri: 'http://localhost:3000/graphql'
// });

// export const links = from([ForwardExtensionsLink, httpLink]);