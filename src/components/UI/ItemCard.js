import React from 'react'
import classes from './ItemCard.module.css'

function ItemCard(props) {
  return (
    <div className={`${classes.ItemCard} ${props.className}`}>{props.children}</div>
  )
}

export default ItemCard