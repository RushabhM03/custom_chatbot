//import React from 'react'
import not_found from "../assets/images/not found.svg";

const PageNotFound = () => {
  return (
    <div>
      <section className="text-gray-600 body-font -my-20">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src={not_found}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Page not found!!
            </h1>
            <p className="mb-8 leading-relaxed">
              The page you are looking for does not exist. Please check your url path and refrsh the page again. 
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
