import React from 'react'
import '../Styles/inputComponentStyle.css'

export default function InputComponent({handleSearch}) {
    return (
        <form>
            <div style={{display: 'flex', position: 'relative'}} className=''>
            <input type="text"  placeholder='Search books, genres, authors, etc' onChange={(e) =>handleSearch(e.target.value)} className='search-input' />
    <button className='fas fa-search search-button'></button>

            </div>
        </form>
    )
}
