import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../Styles/carouselOverlay.css";
import StarRatings  from 'react-star-ratings'
import userLight from '../assest/userLight.png'

export default function CarouselComponent({ data, handleSelect }) {
  const [mouseMove, setMouseMove] = React.useState({
    show: false,
    id: "",
  });
  const handleMoveIn = (item) => {
    setMouseMove({ ...mouseMove, show: true, id: item });
  };
  const handleMoveout = () => {
    setMouseMove({ ...mouseMove, show: false, id: "" });
  };
  return (
    <Carousel
      centerMode={true}
      centerSlidePercentage={18}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
    >
      {data?.books?.map((item, id) => (
        <div
          key={item.id}
          onMouseEnter={() => handleMoveIn(id)}
          onMouseLeave={() => handleMoveout()}
          onClick={() => handleSelect(item?.id)}
        >
          <img
            src={item?.image_url}
            alt={item?.title}
            style={{ height: "330px", width: "220px" }}
            className={
              mouseMove?.id === id && mouseMove?.show ? "image-overlay carousel-image" : "carousel-image"
            }
          />
          {mouseMove?.id === id && mouseMove?.show && (
            <section className='carousel-section'>
              <div className="section-container">
              <span className=''>{item?.available_copies === 0 ? <span className='out-stock'>Out of Stock</span> : <span className='available'>Available</span>}</span>
                <h4>{item?.title}</h4>
                <span>{item?.authors?.map((item, id) => item?.name)}</span>
                <span style={{display: 'block'}}>{new Date(item?.published_at).getFullYear()}</span>
                <p>Genre
                <span className='' style={{display: 'block'}}>{item?.genres.map((item, id) => `${item.name} ${id === data?.genres?.length -1 ? '' : ','}`)}</span>
                </p>
                <p>Tags
                <span className='' style={{display: 'block'}}>{item?.tags.map((item, id) => `${item.name} ${id === data?.genres?.length -1 ? '' : ','}`)}</span>
                </p>
                <div>
                <div className='' style={{display: 'flex'}}>
                    <div className='span-display user'>
                    <img src={userLight} alt="" srcset="" style={{color: '#fff'}} />
                    <span>{item?.likes}</span>
                    </div>
                    <div className='span-display like'>
                    <i className="far fa-heart"></i>
                    <span>{item?.number_of_purchases}</span>
                    </div>
                    <div className='span-display'>
                   <span> Rating: {item?.rating} </span>
                    <StarRatings rating={item?.rating} starDimension='13px' starRatedColor='#EBA430' starSpacing='3px' />
                    </div>
                </div>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}
    </Carousel>
  );
}
