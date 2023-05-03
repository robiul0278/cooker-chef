import React, { useState } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ThreeCard = ({ card }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleTost = () => {
    toast("Favorite Recipe Added!")
    setIsButtonDisabled(true);
  }
  // console.log(card);
  const { name, ingredients, cooking_method, rating } = card;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{cooking_method}</p>
          {ingredients.map((m) => (
            <li>{m}</li>
          ))}
          <Rating>
            placeholderRating={rating}
            readonly
            emptySymbol=
            {<FaRegStar></FaRegStar>}
            placeholderSymbol=
            {<FaStar></FaStar>}
            fullSymbol=
            {<FaStar></FaStar>}
          </Rating>
          <div className="card-actions justify-end">
            <button onClick={handleTost} disabled={isButtonDisabled} className="btn btn-primary">Favorite</button>
            <ToastContainer
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeCard;
