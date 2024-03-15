
import './App.css';
import Home from './routes/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './routes/Products';
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import SearchList from './routes/SearchList';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import fetch from  'isomorphic-fetch';
import User from './routes/User';
export const client = new ApolloClient({
  uri: 'http://v-mart-web-server:5000/graphql',
  cache: new InMemoryCache(),
  // fetch: fetch
});
function App() {

  return (
    
    <BrowserRouter>
    <ApolloProvider client={client}>
    {/* <Navbar/> */}
    <Routes>
      <Route index element={<Home/>} />
      <Route path='products' element={<Products/>} />
      <Route path='searchlist' element={<SearchList/>} />
      <Route path='user' element={<User/>}/>
    </Routes>
    <Footer />
    </ApolloProvider>
    </BrowserRouter>
    
  );
}

export default App;
