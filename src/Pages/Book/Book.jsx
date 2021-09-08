import { useQuery } from "@apollo/client";
import React from "react";
import { useHistory, useParams } from "react-router";
import BackComponent from "../../Component/BackComponent";
import BookDescription from "../../Component/BookDescription";
import BookDetails from "../../Component/BookDetails";
import BookImage from "../../Component/BookImage";
import Header from "../../Component/Header";
import { GET_BOOK } from "../../Service";
import "../../Styles/book.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../Redux/actions";

export default function Book() {
  let { id } = useParams();
  const { loading, data, error } = useQuery(GET_BOOK, {
    variables: { id },
  });
  const cartData = useSelector((state) => state.cartReducer);
  let history = useHistory();
  let dispatch = useDispatch();
  const handleGoBack = () => {
    history.goBack();
  };
  const handleAddCart = (item) => {
    const isPresent = cartData.cart.filter((el) => el.id === item.id);
    if (isPresent.length > 0) {
      const index = cartData.cart.indexOf(isPresent[0]);
      cartData.cart[index].count = cartData.cart[index].count + 1;
      const payload = cartData.cart;
      dispatch(addCart(payload));
    } else {
      const addCount = { ...item, count: 1 };
      const payload = [...cartData.cart, addCount];
      dispatch(addCart(payload));
    }
  };
  if (loading) {
    return "Loading...";
  }
  return (
      <div>
      <div className="header">
        <Header removeCart={true} />
      </div>
    <div className="layout">
      <div className="content-container">
        <div className="first">
          <div className="back-btn-container">
            <BackComponent handleBack={handleGoBack} />
          </div>
          <BookImage image_url={data?.book?.image_url} />
          <div className="book-available-container">
            <p className="copies-text">
              {data?.book?.available_copies} Copies Available
            </p>
            <span className="price-text">${data?.book?.price}</span>
          </div>
          {data?.book?.available_copies !== 0 && (
            <div
              className="cart-main-container"
              onClick={() => handleAddCart(data?.book)}
            >
              <div className="book-cart-container">
                <div className="cart-cover">
                  <i className="fas fa-cart-plus cart-icon"></i>
                  <span className="cart-text">Add to Cart</span>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="second">
          <h3 className="book-title">{data?.book?.title}</h3>
          <p className="book-author">
            {data?.book?.authors?.map(
              (item) =>
                `${item.name} ${
                  id === data?.book?.authors?.length - 1 ? "" : ", "
                }`
            )}
          </p>
          <span style={{ paddingBottom: "17px" }}>
            {new Date(data?.book?.published_at).getFullYear()}
          </span>
          <hr />
          <div>
            <BookDetails data={data?.book} />
          </div>
          <hr />
          <div style={{ paddingTop: "42px" }}>
            <BookDescription description={data?.book?.full_description} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
