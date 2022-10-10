import React, {useContext, useState} from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import Checkout from './Checkout'



function Cart(props) {

  const [isCheckout, setIsCheckout] = useState(false)
  
  const cntx = useContext(CartContext)

  const totalAmount = `$${cntx.totalAmount.toFixed(2)}`
  
  const hasItems = cntx.items.length > 0
  
  const cartItemAddHandler = (item) => {
    cntx.addItem({...item, quantity: 1});
  }

  const cartItemRemoveHandler = (id) => {
    cntx.removeItem(id)
  }

  const onOrderHandler=()=>{
    setIsCheckout(true)
  }
     
  const cancelHandler=()=>{
    setIsCheckout(false)
  }
  return (
    <Modal onClick={props.onHideCartHandler}>
        <ul className={classes['cart-items']}>
          {cntx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
            
          ))}
        </ul>
        {!hasItems && <h3 className={classes.msg}>Hi there ! No Item</h3>}
        
        
        {hasItems && <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        }
        
        {isCheckout && <Checkout onCancel={cancelHandler}/>}
        
        {!isCheckout && <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCartHandler}>Close</button>
            {hasItems && <button className={classes.button} onClick={onOrderHandler}>Order</button>}
        </div>
        }
        
    </Modal>
  )
}

export default Cart