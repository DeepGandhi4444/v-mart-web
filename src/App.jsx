// import logo from './logo.svg';
import './App.css';
import Home from './routes/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Products from './routes/Products';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='products' element={<Products/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
