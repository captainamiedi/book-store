import React from 'react'
import '../Styles/bookImage.css'

export default function BookImage({image_url}) {
    return (
        <div>
            <img src={image_url} alt="" srcset="" className='book-image' />
        </div>
    )
}
