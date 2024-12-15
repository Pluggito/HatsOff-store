import { Routes,Route } from 'react-router-dom';
import Home from './Frontend/Components/Home';
import Collections from './Frontend/Components/Collections';
import AboutPage from './Frontend/Components/AboutPage';
import Contact from './Frontend/Components/Contact';
import Product from './Frontend/Pages/Product';
import Cart from './Frontend/Pages/Cart';
import OrderPage from './Frontend/Pages/OrderPage';
import Orders from './Frontend/Pages/Orders';
import Navbar from './Frontend/Components/Navbar';




function App() {


  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collections />}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/product/:productId' element={<Product />}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order-page' element={<OrderPage/>} />
          <Route path='/orders' element={<Orders/>} />
      </Routes>

    </div>
  )  
}

export default App
