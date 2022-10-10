import React, {useState} from 'react'
import Header from './components/Layouts/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

function App() {

  const [showIsCart, setShowIsCart] = useState(false)

  const showCartHandler = () => {
    setShowIsCart(true)
  }
  const hideCarthandler = () => {
    setShowIsCart(false)
  }

  return (
    <CartProvider>
      {showIsCart && <Cart onHideCartHandler={hideCarthandler}/> }
      <Header onShowCartHandler={showCartHandler}/>  
      <main>
        <Meals />
       
      </main>    
    </CartProvider>
  );
}

export default App;
