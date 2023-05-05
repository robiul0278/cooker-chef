import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ info }) => {
  const { name, picture, experience_years, recipe_count, likes, id } = info;
  return (
<div className="card md:w-96 rounded-none md:card-side bg-white border shadow-md">
      <figure>
        <LazyLoadImage
          className="w-full h-full object-cover"
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
          <Link to={`/recipes/${id}`} className="btn btn-bg">View Recipes</Link>
        </div>
      </div>

    </div>
  );
};

export default ChefCard;
