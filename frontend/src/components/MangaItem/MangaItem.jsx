import React, { useContext } from "react";
import "./MangaItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const MangaItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="manga-item">
      <div className="manga-item-img-container">
        <img className="manga-item-image" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="manga-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="manga-item-info">
        <div className="manga-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="manga-item-desc">{description}</p>
        <p className="manga-item-price">${price}</p>
      </div>
    </div>
  );
};

export default MangaItem;
