import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ThreeCard = ({ card }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const handleTost = () => {
    toast("Favorite Recipe Added!")
    setIsButtonDisabled(true);
  }
  // console.log(card);
  const { name, ingredients, cooking_method, rating } = card;
  return (
    <div className=" p-2">
      <div className="card bg-white h-full shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{cooking_method}</p>
          {ingredients.map((m) => (
            <li>{m}</li>
          ))}
         <div className="flex">
          <span>Rating: </span>
         <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> 
         <span>{rating}</span>
         </div>
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
