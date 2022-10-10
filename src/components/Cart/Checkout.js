import React, {useRef, useState} from 'react'
import classes from './Checkout.module.css'

const isEmpty = (value) => value.trim()===''

const Checkout = (props) => {

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalCodeInputRef = useRef()
    const cityInputRef = useRef()

    const [formInputIsValidity, setFormInputIsValidity] = useState({
        name:true,
        street:true,
        postalCode:true,
        city:true
    })


    const confirmHandler=(e)=>{
        e.preventDefault()

        const name = nameInputRef.current.value
        const street = streetInputRef.current.value
        const postalCode = postalCodeInputRef.current.value
        const city = cityInputRef.current.value

        const enterName = !isEmpty(name)
        const enterStreet = !isEmpty(street)
        const enterpostalCode = !isEmpty(postalCode)
        const entercity = !isEmpty(city)

        setFormInputIsValidity({name:enterName,street:enterStreet, postalCode:enterpostalCode,city:entercity})
        
        const formIsValid = enterName && enterStreet && enterpostalCode && entercity
        if(formIsValid){
            console.log(name, street, postalCode, city)
        }

    }
    const nControlClasses = `${classes.control} ${formInputIsValidity.name?'':classes.invalid}`
    const sControlClasses = `${classes.control} ${formInputIsValidity.street?'':classes.invalid}`
    const pControlClasses = `${classes.control} ${formInputIsValidity.postalCode?'':classes.invalid}`
    const cControlClasses = `${classes.control} ${formInputIsValidity.city?'':classes.invalid}`
    

  return (
   <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type="text" id='name' ref={nameInputRef} />
            {!formInputIsValidity && <p>Name must not be empty</p>}
        </div>
        <div className={sControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type="text" id='street' ref={streetInputRef} />
            {!formInputIsValidity && <p>Street must not be empty</p>}
        </div>
        <div className={pControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type="text" id='postal' ref={postalCodeInputRef} />
            {!formInputIsValidity && <p>Postal conde must not be empty</p>}
        </div>
        <div className={cControlClasses}>
            <label htmlFor='city'>City</label>
            <input type="text" id='city' ref={cityInputRef} />
            {!formInputIsValidity && <p>City must not be empty</p>}
        </div>
        <div className={classes.actions}>
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type=''>Confirm</button>
        </div>
   </form>
  )
}

export default Checkout