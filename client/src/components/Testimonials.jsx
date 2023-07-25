//import React from 'react';
import data from '../assets/data/testimonial_data.json';

const Testimonials = () => {
  const renderTests = (data) => {
    return data.testimonials.map((testimonial, index) => (
      <div
        key={index}
        className="p-4 md:w-1/3 flex flex-col text-center items-center"
      >
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-purple-100 text-purple-500 mb-5 flex-shrink-0">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10"
            viewBox="0 0 24 24"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
            {testimonial.name}
          </h2>
          <h4 className='text-gray-600 text-md title-font font-medium mb-3'>{testimonial.post}</h4>
          <p className="leading-relaxed text-base">{testimonial.txt}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section className="text-gray-600 body-font -my-16">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
              Testimonials from our users
            </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {renderTests(data)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
