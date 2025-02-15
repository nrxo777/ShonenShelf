import React, { useContext } from "react";
import "./MangaDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import MangaItem from "../MangaItem/MangaItem";
import { manga_list } from "../../assets/assets";

const MangaDisplay = ({ category }) => {
  const { manga_list } = useContext(StoreContext);

  return (
    <div className="manga-display" id="manga-display">
      <h2>Top Dishes Near You</h2>
      <div className="manga-display-list">
        {manga_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <MangaItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default MangaDisplay;
