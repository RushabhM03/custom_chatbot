//import React from 'react'
import { Link } from "react-router-dom"

const Tailbar = () => {
    return (
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">DialogBot</span>
      </a>
      <p className="mt-2 text-sm text-gray-500">Your very own chatbot</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3  font-semibold">DIALOGBOT</h2>
        <nav className="list-none mb-10">
          <li>
            <Link className="text-gray-600 hover:text-gray-800" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800" to="/about">About</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800" to="/steps">Steps</Link>
          </li>
          <li>
            <Link className="text-gray-600 hover:text-gray-800" to="/demo">Demo</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 font-semibold">SOCIALS</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Github</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Twitter</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Linkedin</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Gmail</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 font-semibold">ANN REFERENCES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://www.javatpoint.com/artificial-neural-network">ANN</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://deepai.org/machine-learning-glossary-and-terms/softmax-layer">Softmax activation</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks/">RELU Activation</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://www.geeksforgeeks.org/backpropagation-in-data-mining/">Backpropogation</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 font-semibold">NLP REFERENCES</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://neptune.ai/blog/tokenization-in-nlp">Tokenization</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://www.engati.com/glossary/stemming#:~:text=popular%20stemming%20algorithms%3F-,What%20is%20stemming%20in%20NLP%3F,reduced%20to%20a%20standard%20form.">Stemming</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://www.codecademy.com/learn/dscp-natural-language-processing/modules/dscp-bag-of-words/cheatsheet#:~:text=Bag%2Dof%2Dwords(BoW,word%20appears%20in%20a%20text.">Bag of words</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800" href="https://www.oracle.com/in/artificial-intelligence/what-is-natural-language-processing/#:~:text=Natural%20Language%20Processing%3F-,Natural%20Language%20Processing%20(NLP)%20Defined,natural%20language%20text%20or%20voice.">NLP</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 DialogBot —
        <a href="https://twitter.com/dialogbot" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@dialogbot</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
    )
  }
  
  export default Tailbar