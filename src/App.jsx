// import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './routes/Products';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Search from './routes/Search';
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='products' element={<Products/>} />
      <Route path='search' element={<Search/>} />
    </Routes>
    <Footer count="1"/>
    </BrowserRouter>
    
  );
}

export default App;
