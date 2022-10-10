import React, {useState, useContext, useEffect} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'


function HeaderCartButton(props) {

  const [bumpBtn, setBumpBtn] = useState()
  const cartCtx = useContext(CartContext)
  const item = cartCtx.items

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity
  }, 0);
   
  const btnClasses = `${classes.button} ${bumpBtn ? classes.bump : ''}`

  useEffect(()=>{
    if(item.length === 0){
      return 
    }
    setBumpBtn(true)

    const timer = setTimeout(()=>{
      setBumpBtn(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [item])

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton