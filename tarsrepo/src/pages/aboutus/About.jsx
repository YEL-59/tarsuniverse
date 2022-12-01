import React from "react";

import Aboutback from "../../assets/background/Group-23620.png";
import Project1 from "../../assets/background/12-layes-outline (1).gif";
import Project2 from "../../assets/background/35-edit-outline.gif";
import Project3 from "../../assets/background/134-target-outline.gif";
import Project4 from "../../assets/background/409-tool-outline.gif";
function About() {


  return (
    <div className=" ">
      <div className="bg-img3 w-full h-full">
        <div className="flex flex-col  justify-center items-center text-white">
          <h1 className=" text-4xl font-bold max-w-3xl text-center mt-28 mb-10">
            ABOUT US
          </h1>
          <p className="max-w-4xl text-center mb-4">
            Landshare brings real estate to the Binance Smart Chain, offering a
            hassle-free alternative to traditional real estate investments. By
            turning real estate assets into fully liquid, yield generating
            tokens, we create a more accessible form of real estate investment.hassle-free alternative to traditional real estate investments. By
            turning real estate assets into fully liquid, yield generating
            tokens, we create a more accessible form of real estate 
          </p>
        </div>
      </div>

      {/* <div className="flex flex-col lg:flex-row justify-evenly items-center mb-14 p-2 lg:p-0">
                <div className="max-w-lg" >
                    <h1 className="font-bold text-4xl mb-4">The Future of <br /> <span className="text-blue-900 bg-opacity-80% ">Real Estate Investing</span></h1>
                    <p className="max-w-lg text-justify">The rapid growth of DeFi has shown the world that it is the future of finance. It creates investment opportunities for millions of people worldwide who do not have easy access to traditional investment forms. Traditionally, the real estate industry has had a high barrier of entry and has not been attainable for the majority of the population. Landshare is here to change that.</p>
                </div>
                <div>
                    <img src={Aboutback} className='h-[600px]' alt="" />
                </div>
            </div> */}
     

      <h1 className="text-center text-3xl font-bold text-red-600 bg-opacity-90 mt-14 mb-5">
        Services
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 justify-center mt-16 mb-10">
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg  max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg w-[60%] mx-auto"
                    src={Project1}
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-white text-xl font-medium text-center mb-2">
                    Projects
                  </h5>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg w-[60%] mx-auto"
                    src={Project2}
                    alt=""
                  />
                </a>
                <div class="p-6 ">
                  <h5 class="text-white text-xl  text-center font-medium mb-2">
                    Director's Note
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg w-[60%] mx-auto"
                    src={Project3}
                    alt=""
                  />
                </a>
                <div class="p-6 ">
                  <h5 class="text-white text-xl  text-center font-medium mb-2">
                    Defence Projects
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-center mt-16 mb-10">
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg  max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg w-[60%] mx-auto"
                    src={Project1}
                    alt=""
                  />
                </a>
                <div class="p-6">
                  <h5 class="text-white text-xl font-medium text-center mb-2">
                    Projects
                  </h5>
                </div>
              </div>
            </div>
          </div>
          
         
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg w-[60%] mx-auto"
                    src={Project3}
                    alt=""
                  />
                </a>
                <div class="p-6 ">
                  <h5 class="text-white text-xl  text-center font-medium mb-2">
                    Defence Projects
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default About;
