import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h1>FoodOrder</h1>
            <HeaderCartButton onClick={props.onShowCartHandler}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt={mealsImage} />
        </div>
    </>

  )
}

export default Header