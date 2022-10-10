import React, { useRef, useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";


function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const quantityInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const quantity = quantityInputRef.current.value
    if(quantity.trim().length === 0 || quantity < 1 || quantity > 5){
      setAmountIsValid(false)
      return 
    }
    
    props.onAddToCart(+quantity)
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        input={{
          id: "quantity_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
