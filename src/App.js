import logo from './logo.svg';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

} from "@apollo/client";
import Routes from './Route/Routes';
import { Provider } from 'react-redux'
import {store} from './Redux/store'



const client = new ApolloClient({
  uri: 'https://quidax-feec-graphql.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <Provider store={store}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
    </Provider>
  );
}

export default App;
