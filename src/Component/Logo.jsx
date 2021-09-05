import React from 'react'
import Shape from '../assest/Shape.png'
import './logo.css'

export default function Logo() {
    return (
        <div className='logo-container'>
            <div className='image-container'>
            <img src={Shape} alt="" srcset="" className='image' />
            </div>
        </div>
    )
}
