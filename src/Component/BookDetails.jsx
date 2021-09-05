import React from "react";
import user from "../assest/user.png";
import "../Styles/bookCardStyle.css";
import StarRatings from "react-star-ratings";
import { format } from "date-fns/esm";

export default function BookDetails({ data }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between",  }}>
      <div style={{ display: "block" }}>
       <p> <img src={user} alt="" srcset="" /> </p>
        <span>{data?.likes}</span>
      </div>
      <div className="span-display like">
       <p> <i className="far fa-heart"></i></p>
        <span>{data?.number_of_purchases}</span>
      </div>
      <div className="book-vertical-line" />
      <div className="span-display">
        <p className='span-display'><strong> Rating:</strong> {data?.rating} </p>
        <StarRatings
          rating={data?.rating}
          starDimension="17px"
          starRatedColor="#EBA430"
          starSpacing='3px'
        />
      </div>
      {data?.genres?.length  > 0 && <div className='book-details-info span-display'>
          <p className='span-display details-text'>Genre</p>
          <span className='span-display'>{data?.genres.map((item, id) => `${item.name} ${id === data?.genres?.length -1 ? '' : ','}`)}</span>
      </div>}
      {data?.tags?.length  > 0 &&<div className='book-details-info span-display'>
          <p className='span-display details-text'>Tags</p>
          <span className='span-display'>{data?.tags.map((item, id) => `${item.name} ${id === data?.tags?.length - 1 ? '' : ','}`)}</span>
      </div>}
      <div className='book-details-info span-display'>
          <p className='span-display details-text'>Publisher</p>
          <span className='span-display'>{data?.publisher}</span>
      </div>
      <div className='book-details-info span-display'>
          <p className='span-display details-text'>Released</p>
          <span className='span-display'>{format(new Date(data?.release_date), 'ee MMMM, yyyy')}</span>
      </div>
    </div>
  );
}
