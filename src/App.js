import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Routes from './Route/Routes';



const client = new ApolloClient({
  uri: 'https://quidax-feec-graphql.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
