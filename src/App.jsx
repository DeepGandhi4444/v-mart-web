// import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './routes/Products';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
function App() {
  return (
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='products' element={<Products/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
