import React from "react";
import Hero from "../Hero/Hero";
import { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../index.css'

const Home = () => {
  const [details, setDetails] = useState([]);
  // console.log(details);
  useEffect(() => {
    fetch("https://cooker-server-sbrobiulislam1212-gmailcom.vercel.app/details")
      .then((res) => res.json())
      .then((data) => setDetails(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="">
      <Hero></Hero>
      <ToastContainer/>
      <div className="py-14">
      <h2 className="sub-title text-center">Ingredients for Success</h2>
        <h1 className="text-center  p-2 font-bold font-title text-4xl">
          We are UFS. We support Chefs.
        </h1>
      </div>
      <div className="hero bg-white md:py-14">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://rb.gy/kjptx"
            className="md:max-w-xl sm:max-w-xs m-2 rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className=" text-center text-2xl p-2 font-bold">
              Chef support – for chefs by chefs
            </h1>
            <p className="py-3 text-justify font-semibold">
              <a className=" text-orange-600 font-extrabold">
                Unilever Food Solutions
              </a>{" "}
              is a business built by Chefs, so we know what you face every day
              in the kitchen. Everything we do is focused on making your life a
              little easier.{" "}
              <span className=" font-extrabold">We aim to inspire you</span>,
              train you and provide you with the best product solutions.
            </p>

            <p className="py-3 text-justify font-semibold">
              Our <span className=" font-extrabold">global network</span> of
              food service professionals help source the best sustainable
              ingredients, develop quality products, create inspiring &{" "}
              <span className=" text-orange-600 font-extrabold">
                trending recipes
              </span>
              , and provide chef training and support.
            </p>

            <p className="py-3 text-justify font-semibold">
              Drawing from their extensive experience in{" "}
              <span className=" font-extrabold">
                professional food services
              </span>{" "}
              , our team of over{" "}
              <a className=" text-orange-600 font-extrabold">354 Chefs</a>{" "}
              create dish solutions that balance great taste, convenience and
              nutrition with a consistently high standard.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-14">
      <h2 className="sub-title text-center">SELECT your Chef</h2>
        <h1 className="text-center font-title">
        Explore Popular Chef
        </h1>
      </div>
      <div className="grid sm:grid-cols-2 md:px-40 p-5 py-14 md:grid-cols-3 lg:grid-cols-3 grid-cols-1 gap-5 container mx-auto">
        {details.map((info) => (
          <ChefCard key={info.id} info={info}></ChefCard>
        ))}
      </div>
      <div className="">
        <h1 className="text-center text-blue-600 pt-14 font-title">
        PRODUCT CATALOG BRANDS
        </h1>
      </div>
      <div className="grid container mx-auto my-14 p-14 grid-cols-3 md:grid-cols-7 border-2 bg-white">
        <div>
          {" "}
          <img src="https://rb.gy/8oah3" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://rb.gy/2d84a" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://rb.gy/0yr82" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://rb.gy/jvsus" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://rb.gy/90xsc" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://rb.gy/fd081" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://rb.gy/59spv" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
