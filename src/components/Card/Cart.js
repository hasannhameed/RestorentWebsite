import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../Store/cart-contex';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // Calculate total amount
  const totalAmount = cartCtx.items.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0).toFixed(2);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={classes['cart-item']}>
          <span className={classes['item-name']}>Name: {item.name}</span><br />
          <span className={classes['item-price']}>Price: {item.price}</span><br />
          <span className={classes['item-quantity']}>Quantity: {item.quantity}</span><br />
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
