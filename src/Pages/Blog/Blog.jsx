import React from "react";
import Hero from "../Hero/Hero";

const Blog = () => {
  return (
    <div>
      <div>
      {/* <Hero></Hero> */}
      </div>
      <div className="container mx-auto ">
      <div>
        <h1 className="text-center my-14 font-bold text-5xl">Answer the Following Questions</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-14 gap-5 ">
        <div className="font-semibold border-2 p-5">
          <h1>
            Question: Tell us the differences between uncontrolled and controlled
            components. ?
          </h1>
          <br />
          <p>
            Controlled Components: Controlled components are React components
            that receive their current value as a prop and notify changes by
            triggering a callback function (usually passed down as another
            prop). The value of a controlled component is always updated by the
            parent component, and any changes to the value are also controlled
            by the parent component.
          </p>
          <p>
            Uncontrolled Components: Uncontrolled components are React
            components that handle their own data input and output internally,
            without relying on the parent component to update their value. The
            value of an uncontrolled component is set by the user, and can be
            accessed through a reference to the component
          </p>
        </div>
        <div className="font-semibold border-2 p-5">
          <h1>Question: How to validate React props using PropTypes ?</h1> <br />
          <p>
            PropTypes provides a range of data types and validations that can be
            used to ensure the expected data types and values of props in a
            component.
          </p>
        </div>
        <div className="font-semibold border-2 p-5">
          <h1>Question: Tell us the difference between nodejs and express js.</h1> <br />
          <p>
            Node.js is a JavaScript runtime that allows developers to run
            JavaScript code outside of a web browser. It provides a platform for
            building server-side applications using JavaScript.
          </p>
          <p>
            Express.js, on the other hand, is a web application framework for
            Node.js. It provides a set of features and tools for building web
            applications and APIs using Node.js.
          </p>
        </div>
        <div className="font-semibold border-2 p-5">
          <h1>Question: What is a custom hook, and why will you create a custom hook?</h1> <br />
          <p>
            A custom hook in React is a JavaScript function that uses one or
            more built-in React hooks and/or other custom hooks to encapsulate
            complex logic or behavior in a reusable way.
          </p>
          <p>
            custom hooks are a powerful tool that helps to keep your code
            organized, maintainable, and reusable in a declarative and
            functional way.
          </p>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Blog;
