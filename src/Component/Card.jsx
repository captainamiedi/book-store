import React from "react";
import "../Styles/bookCardStyle.css";
import StarRatings from "react-star-ratings";
import user from "../assest/user.png";

export default function Card({ data, handleSelect, handleAddCart }) {
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
    <div 
    onMouseEnter={() => handleMoveIn(data?.id)}
    onMouseLeave={() => handleMoveout()}
    className={
      mouseMove?.id === data?.id && mouseMove?.show ? "card-container-shadow" : ""
    }
    >
    <div className="card-container ">
      <div>
        <img src={data?.image_url} alt="" srcset="" className="card-image" onClick={() => handleSelect(data?.id)} />
      </div>
      <div className="others-container">
        <p className="card-title-text" onClick={() => handleSelect(data?.id)}>{data?.title}</p>
        <span className="author-text">
          {data?.authors?.map((item) => item?.name)}-{" "}
          {new Date(data?.published_at).getFullYear()}
        </span>
        <div className="like-container" onClick={() => handleSelect(data?.id)}>
          <div className="span-display user">
            <img src={user} alt="" srcset="" />
            <span>{data?.likes}</span>
          </div>
          <div className="span-display like">
            <i className="far fa-heart"></i>
            <span>{data?.number_of_purchases}</span>
          </div>
          <div className="vertical-line"></div>
          <div className="span-display">
            <span> Rating: {data?.rating} </span>
            <StarRatings
              rating={data?.rating}
              starDimension="17px"
              starRatedColor="#EBA430"
              starSpacing="4px"
            />
          </div>
        </div>
        <div className="price-container" onClick={() => handleSelect(data?.id)}>
          <span className="span-display">{`$${data?.price}`}</span>
          <span className="available-conatainer">
            {data?.available_copies === 0 ? (
              <span className="out-stock">Out of Stock</span>
            ) : (
              <span className="available">
                {data?.available_copies} Copies Available
              </span>
            )}
          </span>
        </div>
        {data?.available_copies !== 0 && (
          <div className="cart-container" onClick={() => handleAddCart(data)}>
            <i className="fas fa-cart-plus"></i>
            <span className="cart-style">Add to Cart</span>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
