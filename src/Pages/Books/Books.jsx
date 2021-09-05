import { useQuery } from '@apollo/client'
import React, { useState, useEffect } from 'react'
import CarouselComponent from '../../Component/Carousel';
import Header from '../../Component/Header';
import '../../Styles/books.css'
import { GET_ALL_BOOKS } from '../../Service'
import Card from '../../Component/Card';
import { useHistory } from 'react-router';
import Cart from '../../Component/Cart';

export default function Books() {
    const {loading, error, data} = useQuery(GET_ALL_BOOKS)
    const [showModal, setShowModal] = useState(false)
    const [localData, setLocalData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    console.log(data)
    let history = useHistory()
    useEffect(() => {
        if (data) setLocalData(data?.books)
    }, [data])

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
        // console.log(searchData, 'search');
    }
    console.log(showModal, 'modal');
    return (
        <div className={showModal ? 'modal-overlay layout' : 'layout'}>
            <Header showModal={showModal} setShowModal={setShowModal} handleSearch={handleSearch}/>
            {!searchValue && <CarouselComponent data={data} handleSelect ={handleCardSelect}/>}
            <div style={{paddingTop: '65px'}}>
                <p style={{fontWeight: 'bold'}}>{searchValue ? `${localData?.length} results found for ${searchValue}` : 'All Books'}</p>
                <hr />
            </div>

            <div className="grid-container">
               {localData?.map((item) => <Card data={item} key={item.id} handleSelect ={handleCardSelect} />)}
            </div>
            {/* {showModal && <Cart />} */}

            <Cart  />
        </div>
    )
}
