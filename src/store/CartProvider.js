import React, {useReducer} from 'react'
import CartContext from './cart-context'

const defaultState = {
    items:[],
    totalAmount:0,
} 

const CartReducer = (state, action) => {
    if(action.type==='ADD_ITEM'){
                
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.quantity
        
        const index = state.items.findIndex((item, index) => item.id === action.item.id);
        
        const existingCartItem = state.items[index]
       
        let updatedItems;

        if (existingCartItem) {
          const updatedItem = {...existingCartItem,
            quantity: existingCartItem.quantity + action.item.quantity,
            
          };
         
          updatedItems = [...state.items];
          updatedItems[index] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }
    
        return {items: updatedItems,  totalAmount: updateTotalAmount};
        
        
    }
    if(action.type === 'REMOVE_ITEM'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
            );
        const existingCartItem = state.items[existingCartItemIndex];

        const updateTotalAmount = state.totalAmount-existingCartItem.price
        
        let updateItems
        if(existingCartItem.quantity===1) {
            updateItems = state.items.filter(item=> item.id !== action.id)
        }else{
            const updatedItems = {...existingCartItem, quantity:existingCartItem.quantity-1}
            updateItems = [...state.items]
            updateItems[existingCartItemIndex]= updatedItems

        }
        return {items:updateItems, totalAmount:updateTotalAmount}
    }

    return {defaultState}

}



const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(CartReducer, defaultState)

    const addCartItemHandler = (item) => {
        dispatchCartAction({type:'ADD_ITEM', item:item})
    }

    const removeCartItemHandler = (id) => {
        dispatchCartAction({type:'REMOVE_ITEM', id:id})
    }


    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addCartItemHandler,
        removeItem:removeCartItemHandler,
    }

  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider