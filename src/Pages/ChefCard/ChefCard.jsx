import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

const ChefCard = ({ info }) => {
  const { name, picture, experience_years, recipe_count, likes, id } = info;
  return (
<div className="card card-side bg-base-100 border-2">
      <figure>
        <img
          className="w-full h-64 object-cover object-center"
          src={picture}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience: {experience_years} years</p>
        <p>Total Recipe: {recipe_count}</p>
        <div className="flex">Like: {likes} <FontAwesomeIcon icon={faHeart} /> </div>
        <div className="card-actions justify-end">
          <Link to={`/recipes/${id}`} className="btn btn-primary">View Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
