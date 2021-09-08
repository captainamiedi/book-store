import React from 'react'
import '../Styles/CheckoutStyle.css'
import { useSelector } from "react-redux";

export default function CheckoutBadge({showModal, setShowModal}) {
  const cartData = useSelector((state) => state.cartReducer);
    return (
        <div id="ex4" onClick={() => setShowModal(!showModal)}>
  <span class="p1 fa-stack fa-1x has-badge" data-count={cartData.cart.length}>
    {/* <!--<i class="p2 fa fa-circle fa-stack-2x"></i>--> */}
    <i class="p3 fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b"></i>
  </span>
</div>
    )
}