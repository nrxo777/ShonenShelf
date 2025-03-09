import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Shonen",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(data);
    // const formData = new formData();
    // formData.append("name", data.name);
    // formData.append("description", data.description);
    // formData.append("price", Number(data.price));
    // formData.append("category", data.category);
    // formData.append("image", image);
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload_area"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="add-product-name upload_area">
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here.."
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="6"
            placeholder="Write description here.."
            required
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Shonen">Shonen</option>
              <option value="Seinen">Seinen</option>
              <option value="Kodomomuke">Kodomomuke</option>
              <option value="Isekai">Isekai</option>
              <option value="Horror">Horror</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Comedy">Comedy</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="$20"
            />
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
