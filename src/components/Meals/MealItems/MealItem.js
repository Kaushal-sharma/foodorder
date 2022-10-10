import React, {useContext} from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'


function MealItem(props) {
  const cntx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`

  const AddCartItem = (quantity) => {
    cntx.addItem({
      id:props.id,
      name:props.name,
      quantity:quantity,
      price:props.price
    })
  }
  return (
    <li className={classes.meal} >
    <div >
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price} >{price}</div>
    </div>
    <div>
      <MealItemForm id={props.id} onAddToCart={AddCartItem}/>
    </div>
    </li>
  )
}

export default MealItem