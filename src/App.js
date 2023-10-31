import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '../src/Pages/Home'
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wishlist' element={<Wishlist/>}/>

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
