import CartContext from './cart-contex';

const CartProvider = props => {
    let items = [];
    const addItemToCartHandler = item => {
        items.push(item)
        console.log('inside addItemToCartHandler',cartContext)
       
    };
    const removeItemFromCartHandler = id => {};

    const cartContext = {
        items:items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        message: 'Click here'
    };
    return <CartContext.Provider value={cartContext}>
            {console.log("inside cartContext cartContext",cartContext)}
            {props.children}
        </CartContext.Provider>
};
export default CartProvider;