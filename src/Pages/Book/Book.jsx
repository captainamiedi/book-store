import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router'
import BackComponent from '../../Component/BackComponent';
import BookDescription from '../../Component/BookDescription';
import BookDetails from '../../Component/BookDetails';
import BookImage from '../../Component/BookImage';
import Header from '../../Component/Header';
import { GET_BOOK } from '../../Service';
import '../../Styles/book.css'

export default function Book() {
    let {id} = useParams()
    const {loading, data, error} = useQuery(GET_BOOK, {
        variables: {id}
    })
    console.log(data);
    if (loading) {
        return 'Loading...'
    }
    return (
        <div className='layout'>
            <div className="header">
           <Header removeCart={true} /> 
            </div>
            <div className='content-container'>
                <div className='first'>
                    <div className='back-btn-container'>
                        <BackComponent />
                    </div>
                    <BookImage image_url={data?.book?.image_url} />
                    <div className='book-available-container'>
                        <p className='copies-text'>{data?.book?.available_copies} Copies Available</p>
                        <span className='price-text'>${data?.book?.price}</span>
                    </div>
                    <div className="cart-main-container">
                    <div className="book-cart-container">
                        <div className='cart-cover'>
                    <i className="fas fa-cart-plus cart-icon"></i>
                    <span className='cart-text'>Add to Cart</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='second'>
                    <h3 className='book-title'>{data?.book?.title}</h3>
                    <p className='book-author'>{data?.book?.authors?.map((item) => `${item.name} ${id === data?.book?.authors?.length - 1 ? '' : ', '}`)}</p>
                    <span style={{paddingBottom: '17px'}}>{new Date(data?.book?.published_at).getFullYear()}</span>
                    < hr />
                    <div>
                        <BookDetails data={data?.book} />
                    </div>
                    <hr />
                    <div style={{paddingTop: '42px'}}>
                    <BookDescription description={data?.book?.full_description}/>

                    </div>
                </div>
            </div>
        </div>
    )
}
