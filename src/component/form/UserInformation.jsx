/* eslint-disable no-unused-vars */
import "./UserInformation.css";
import React, { useState } from "react";
import Information from "./Information";

export default function UserInformation() {
  const [allUser, setAllUser] = useState([]);
  const [user, setUser] = useState({
    clothName: "",
    clothId: "",
    clothPrice: "",
    clothQuantity: "",
    colour: "",
    size: "",
    date: "",
    describtion: "",
    checkbox: false,
  });

  const {
    clothName,
    clothId,
    clothPrice,
    clothQuantity,
    colour,
    size,
    date,
    describtion,
    checkbox,
  } = user;

  const inputChange = (e) => {
    const fillName = e.target.name;
    setUser({ ...user, [fillName]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setAllUser([...allUser, user]);
    //    console.log(user)
    // e.target.checkbox.checked=false
    setUser({
      clothName: "",
      clothId: "",
      clothPrice: "",
      clothQuantity: "",
      colour: "",
      size: "",
      date: "",
      describtion: "",
      checkbox: false,
    });
  };
  // console.log(allUser)
  const deleteUser = (index) => {
    const remove = allUser.filter((element, i) => i !== index);
    setAllUser(remove);
  };

  return (
    <div>
      <div className="mainForm">
        <h1>User Information</h1>
        <form onSubmit={handelSubmit}>
          <label className="label" htmlFor="">
            Cloth Name:
          </label>{" "}
          <br />
          <input
            className="input"
            onChange={inputChange}
            value={clothName}
            type="text"
            name="clothName"
            placeholder="Write Cloth Stor Name"
            required
          />{" "}
          <br />
          <label className="label" htmlFor="">
            Cloth Id:
          </label>{" "}
          <br />
          <input
            className="input"
            onChange={inputChange}
            value={clothId}
            type="text"
            name="clothId"
            placeholder="Id Number"
            required
          />{" "}
          <br />
          <label className="label">Product Price:</label> <br />
          <input
            className="input"
            onChange={inputChange}
            value={clothPrice}
            type="number"
            min={0}
            max={10000}
            name="clothPrice"
            placeholder="Product Price"
            required
          />
          <br />
          <label className="label">Quantity:</label> <br />
          <input
            className="input"
            onChange={inputChange}
            value={clothQuantity}
            min={0}
            max={10}
            type="number"
            name="clothQuantity"
            placeholder="Quantity"
            required
          />{" "}
          <br />
          <label className="label">Select Colour:</label> <br />
          <select onChange={inputChange} value={colour} name="colour">
            <option value="Choice Colour">Choice Colour</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Black">Black</option>
            <option value="Green">Green</option>
          </select>{" "}
          <br />
          <label className="label">Size</label> <br />
          <input
            className="Radio"
            onChange={inputChange}
            value="S"
            checked={size === "S"}
            name="size"
            type="radio"
          />
          S
          <input
            className="Radio"
            onChange={inputChange}
            value="M"
            checked={size === "M"}
            name="size"
            type="radio"
          />{" "}
          M
          <input
            className="Radio"
            onChange={inputChange}
            value="L"
            checked={size === "L"}
            name="size"
            type="radio"
          />{" "}
          L
          <input
            className="Radio"
            onChange={inputChange}
            value="XL"
            checked={size === "XL"}
            name="size"
            type="radio"
          />
          XL
          <br />
          <label className="label">Manufacture:</label> <br />
          <input
            onChange={inputChange}
            value={date}
            type="date"
            name="date"
            required
          />{" "}
          <br />
          <label className="label">Describtion:</label>
          <br />
          <textarea
            onChange={inputChange}
            value={describtion}
            name="describtion"
            cols="30"
            rows="5"
            placeholder="Write Your Message"
          ></textarea>{" "}
          <br />
          <label className="label">
            <input
              onChange={inputChange}
              // value={checkbox}
              checked={checkbox}
              type="checkbox"
              name="checkbox"
              required
            />{" "}
            Accept terms and condition
          </label>{" "}
          <br />
          <button type="submit">Order Now</button>
        </form>
      </div>
      <div className=""></div>
      <table>
        <thead className="allCloth">
          {allUser.length === 0 ? (
            <h2>No product added</h2>
          ) : (
            <tr className="subCloth">
              <th>Cloth Name</th>
              <th>Cloth ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Colour</th>
              <th>Size</th>
              <th>Date</th>
              <th>Describtion</th>
              <th>Remove</th>
            </tr>
          )}
        </thead>
        <tbody>
          {allUser.map((userInfo, index) => (
            <Information
              key={index}
              index={index}
              userInfo={userInfo}
              deleteUser={deleteUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
