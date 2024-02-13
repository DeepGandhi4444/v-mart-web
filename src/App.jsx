// import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './routes/Products';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
// import Search from './components/Search';
import { AppProvider } from './AppContext';
import SearchList from './routes/SearchList';



function App() {

  return (
    
    <BrowserRouter>
    <AppProvider>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='products' element={<Products/>} />
      <Route path='searchlist' element={<SearchList/>} />
    </Routes>
    <Footer />
    </AppProvider>
    </BrowserRouter>
    
  );
}

export default App;
