import  classes from './MealsItemForm.module.css'
import Input from '../UI/Input';
import CartContext from '../Store/cart-contex';
import React,  { useContext } from 'react';


const MealsItemForm = (props) => {
    const cartctnx = useContext(CartContext);
    console.log("reinitializing cartCntx", cartctnx);
    const addItemToCart = (event) =>{
        event.preventDefault();
        //update the cartcntx.items
        // cartctnx.addItem(props.item)
        console.log('after addItemsToCart',CartContext);
        
    }
    return <form classes = {classes.form}>
        {console.log(cartctnx)}
         <Input
          label="Amount" input={{
            id: 'amount',
            type:'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
         }}/>
        <button className={classes.button} onClick={addItemToCart}>+ Add</button>
    </form>
}

export default MealsItemForm;