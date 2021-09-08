import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import CarouselComponent from '../../Component/Carousel';
import Header from '../../Component/Header';
import '../../Styles/books.css'
import { GET_ALL_BOOKS } from '../../Service'
import Card from '../../Component/Card';
import { useHistory } from 'react-router';
import Cart from '../../Component/Cart';
// import {useCart} from '../../context'
import {useDispatch, useSelector} from 'react-redux'
import { addCart, updateCount } from '../../Redux/actions';

export default function Books() {
    const {loading, error, data} = useQuery(GET_ALL_BOOKS)
    const [showModal, setShowModal] = useState(false)
    const [localData, setLocalData] = useState([])
    const [searchValue, setSearchValue] = useState('')

    // global state
    const cartData = useSelector(state => state.cartReducer)

    // console.log(data)
    let history = useHistory()
    let  dispatch = useDispatch()
    console.log(cartData.cart, 'cart');
    const handleSidebar = () => {
        const body = document.body;
        if (showModal) {
            body.style.position = 'fixed';
        } else {
            body.style.position = null;
        }
    }
    useEffect(() => {
        if (data) setLocalData(data?.books)
    }, [data])

    React.useEffect(() => {
     handleSidebar()
    }, [showModal])

    if (loading) {
        return 'Loading....'
    }
    const handleCardSelect = (data) => {
        console.log(data);
        history.push(`/book/${data}`)
    }
    const handleSearch = (value) => {
        setSearchValue(value)
        const searchData = data?.books?.filter((el) => el.title.toLowerCase().includes(value.toLowerCase()))
        setLocalData(searchData)
    }
    const handleAddCart = (item) => {
        const isPresent = cartData.cart.filter((el) => el.id === item.id)
        if (isPresent.length > 0) {
            const index = cartData.cart.indexOf(isPresent[0])
            cartData.cart[index].count = cartData.cart[index].count + 1
            const payload = cartData.cart
            dispatch(addCart(payload)) 
        } else {
            const addCount = {...item, count: 1}
            const payload = [...cartData.cart, addCount]
         dispatch(addCart(payload))   
        }

        setShowModal(true)
    }
    console.log(showModal, 'modal');
    return (
        <div>
            <Header showModal={showModal} setShowModal={setShowModal} handleSearch={handleSearch}/>
        <div className={showModal ? 'modal-overlay layout' : 'layout'}>
            {!searchValue && <div style={{paddingTop: '27px'}}>
            <p style={{fontWeight: 'bold'}}>{'Featured Books'}</p>
                <hr />
            </div>}
            {!searchValue && <CarouselComponent data={data} handleSelect ={handleCardSelect}/>}
            <div style={{paddingTop: '65px'}}>
                <p style={{fontWeight: 'bold'}}>{searchValue ? `${localData?.length} results found for ${searchValue}` : 'All Books'}</p>
                <hr />
            </div>

            <div className="grid-container">
               {localData?.map((item) => <Card data={item} key={item.id} handleSelect ={handleCardSelect} handleAddCart={handleAddCart} />)}
            </div>
            {/* {showModal && <Cart />} */}

            <Cart show={showModal} handleClose={() => setShowModal(false)}>
                
            </Cart>
        </div>
        </div>
    )
}
