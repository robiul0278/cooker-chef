import React from "react";

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
            <h1 className="mb-5 text-xl font-bold">Ingredients for Success</h1>
            <h1 className="mb-5 text-4xl font-bold">All You Need to Grow Your Food Business</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
