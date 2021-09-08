import React from 'react'
import '../Styles/cartItem.css'

export default function CartItem({data, increase, decrease, removeCart}) {
    console.log(data, 'data');
    return (
        <div>
        <div className='cart-item-container'> 
            <div className='cart-item-first-container'>
                <div>
                <img src={data?.image_url} alt="" className='cart-item-image' srcset="" />
                </div>
                <div className='cart-item-second-container'>
                <span className='cart-item-title-text'>{data?.title}</span>
                <span className='cart-item-author-text'>{data?.authors?.map((item) => item.name)}</span>
                <span className='cart-item-remove-text' onClick={() => removeCart(data)}>Remove</span>
            </div>
            </div>
            
            <div className='cart-item-third-container'>
                <span>${data?.price}</span>
                <div className='cart-item-change-container'>
                <span className='cart-item-reduce' onClick={() => decrease(data)}>
                    <span className='inner-reduce'>-</span>
                </span>
                <span className='cart-item-value'>
                <span className='inner-reduce'>{data?.count}</span>
                </span>
                <span className='cart-item-reduce' onClick={() => increase(data)}>
                <span className='inner-reduce'>+ </span>
                    </span>
                </div>
                <span className='cart-item-total'>${data?.price * data?.count}</span>
            </div>

        </div>
            <div className='cart-item-divider-container'>
            <hr />
          </div>
        </div>
    )
}
