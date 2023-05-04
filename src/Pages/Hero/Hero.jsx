import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div
        className="hero bg-cover hero-bg"
        style={{
          backgroundImage: `url("https://resizer.otstatic.com/v2/photos/wide-huge/3/51224104.png")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content py-40">
          <div className="max-w-md">
            <h1 className="mb-5 text-2xl font-bold">Ingredients for Success</h1>
            <h1 className="mb-5 text-5xl font-bold">All You Need to Grow Your Food Business</h1>
            <p className="mb-5 font-semibold">
            Chef Academy is located in the centre of London. Our <span className="font-bold">expert chefs</span> train and educate students with traditional methods of cuisine. They are the most modern and creative cooking techniques!
            </p>
            <Link to='/register' className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
