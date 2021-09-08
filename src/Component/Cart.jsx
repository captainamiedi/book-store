import React from "react";
import "../Styles/sideBar.css";
import BackComponent from "./BackComponent";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../Redux/actions";

export default function Cart({ show, handleClose, children }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const cartData = useSelector((state) => state.cartReducer);
  const [subTotal, setSubTotal] = React.useState();
  let dispatch = useDispatch();
  const increaseCount = (data) => {
    const index = cartData.cart.indexOf(data);
    cartData.cart[index].count = cartData.cart[index].count + 1;
    const payload = cartData.cart;
    dispatch(addCart(payload));
  };
  const decreaseCount = (data) => {
    const index = cartData.cart.indexOf(data);
    if (cartData.cart[index].count === 1) {
      cartData?.cart.splice(index, 1);
      return dispatch(addCart(cartData?.cart));
    }
    cartData.cart[index].count = cartData.cart[index].count - 1;
    const payload = cartData.cart;
    dispatch(addCart(payload));
  };
  const handleRemoveCart = (data) => {
    const index = cartData.cart.indexOf(data);
    cartData?.cart.splice(index, 1);
    return dispatch(addCart(cartData?.cart));
  }
  React.useEffect(() => {
    let value = 0;
    cartData.cart.map((item) => {
      value += item.price * item.count;
    });
    setSubTotal(value);
    console.log(value, "total");
  }, [cartData]);
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="cart-header-container">
          <div className="cart-back-btn-container">
            <BackComponent handleBack={handleClose} />
          </div>
          <div className="cart-your-cart-container">
            <span className="cart-your-cart-text">Your Cart</span>
            <i className="fas fa-cart-plus 3x"></i>
          </div>
        </div>
        {cartData?.cart.length > 0 && <div className="cartItem-container">
          {cartData?.cart?.map((item) => (
            <CartItem
              key={item.id}
              data={item}
              increase={increaseCount}
              decrease={decreaseCount}
              removeCart={handleRemoveCart}
            />
          ))}
        </div>}
        {cartData?.cart.length > 0 &&  <div className="cart-subtotal">
          <span className="cart-subtotal-label">Subtotal</span>
          <span className="cart-subtotal-text">${subTotal?.toFixed(2)}</span>
        </div>}

        {cartData?.cart.length > 0 &&  <div className="cart-checkout-container">
          <div className="cart-checkout-cover">
            <div className="cart-checkout-main">
              <i className="fas fa-cart-plus cart-checkout-icon"></i>
              <span className="cart-text">Proceed to Checkout</span>
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
}
