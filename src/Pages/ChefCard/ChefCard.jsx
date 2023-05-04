import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ info }) => {
  const { name, picture, experience_years, recipe_count, likes, id } = info;
  return (
<div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <LazyLoadImage
          className="w-full h-64 p-2 object-cover rounded object-center"
          src={picture}
          alt="Movie"
          effect="blur"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Experience: {experience_years} years</p>
        <p>Recipe: {recipe_count}</p>
        <div className="flex">Like: {likes} <FontAwesomeIcon icon={faHeart} /> </div>
        <div className="card-actions justify-end">
          <Link to={`/recipes/${id}`} className="btn btn-primary">View Recipes</Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
