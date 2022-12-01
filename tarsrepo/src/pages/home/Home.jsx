import React from "react";
import { useState } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

import Final1 from "../../assets/service/building2.png";
import Final from "../../assets/service/Untitled design.png";

import brand1 from "../../assets/service/bsrm.png";
import brand2 from "../../assets/service/brac-bank.png";
import brand3 from "../../assets/service/Prime_Bank_Logo.png";
import brand4 from "../../assets/service/fresh.png";
import brand5 from "../../assets/service/ksrm-logo.png";
import brand6 from "../../assets/service/crown.png";
import brand7 from "../../assets/service/aks.jpg";
import brand8 from "../../assets/service/rak.png";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import phone from "../../assets/icon/phone-cell.jpg";
import phonebg from "../../assets/background/7.jpg";
import main from "../../CSS/main.css";
import clock from "../../assets/icon/clock.gif";
import virus from "../../assets/icon/virus.gif";
import Zero from "../../assets/icon/zero.gif";
import community from "../../assets/icon/c1.gif";
import custom from "../../assets/icon/custom-unscreen.gif";
import cm1 from "../../assets/icon/cm2.gif";
import building from "../../assets/background/building.png";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubSharpIcon from "@mui/icons-material/BathtubSharp";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import CarRepairSharpIcon from "@mui/icons-material/CarRepairSharp";
import WhatsappOutlinedIcon from "@mui/icons-material/WhatsappOutlined";
import Carosule from "../../components/Carosule";
import download1 from "../../assets/background/phoneimagee-removebg-preview.png";
import download2 from "../../assets/background/pngwing.com (1).png";
import phoneimg from "../../assets/background/Untitled-4 (1).png";
import Gallary1 from "../../assets/gallary/gallary1.jpg";
import Gallary2 from "../../assets/gallary/gallery2.jpg";
import Gallary3 from "../../assets/gallary/gallery3.png";
import Project1 from "../../assets/background/12-layes-outline (1).gif";
import Project2 from "../../assets/background/35-edit-outline.gif";
import Project3 from "../../assets/background/134-target-outline.gif";
import Project4 from "../../assets/background/409-tool-outline.gif";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Home() {
  {
    /**This part is for form validation only for email fiels .....start*/
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  {
    /**This part is for form validation .....end const onSubmit = (values) => alert(JSON.stringify(values, null, 2));*/
  }

  const Service = [
    {
      id: 1,
      ServiceImg: require("../../assets/icon/reg__1_-removebg-preview.png"),
      ServiceTitle: "Book Your ",
      Servicesubtitle: "Desired Flat",
      ServiceBody:
        "No Lottery You can choice your floor and bok only at 2lakh taka",
    },
    {
      id: 1,
      ServiceImg: require("../../assets/icon/reg__3_-removebg-preview.png"),
      ServiceTitle: "Get Land ",
      Servicesubtitle: "Registration Paper",
      ServiceBody: "pay land shar price and get land registration paper",
    },
    {
      id: 1,
      ServiceImg: require("../../assets/icon/pay-removebg-preview.png"),
      ServiceTitle: "Pay Construction",
      Servicesubtitle: "Cost In Installment",
      ServiceBody:
        "Pay Construction expense in installment and supervise development progress",
    },
    {
      id: 1,
      ServiceImg: require("../../assets/icon/handover-removebg-preview.png"),
      ServiceTitle: "Get Handover ",
      Servicesubtitle: "In Just 3 Years",
      ServiceBody:
        "No delay in project handover guaranteed project handover in 3 years",
    },
  ];

  return (
    <div>
      {/**hero div ...start */}
      <div className="bg-img w-full h-full">
        {/**<video src={video1} autoPlay loop muted></video> */}

        <div class=" flex justify-evenly items-center    gap-5  flex-col  lg:flex-row   p-2 lg:p-0 ">
          {/**left flex..start */}

          <div className="p-2  lg:p-0 ">
            <h1 class="text-2xl lg:text-6xl font-bold lg:text-white lg:text-start  mb-5">
              TARS BINARY
            </h1>

            <h2 className="text-lg  lg:text-4xl text-white lg:text-start font-semibold  mb-5">
              TARS BINARY is a technology company
            </h2>
            <p className="text-sm lg:text-lg text-white  max-w-lg">
              TARS BINARY is a technology company where we are designing and
              developing technologies for military intelligence, law enforcement
              agency, and a vast area of Engineering Education Media for the
              first time in the globe. GET STARTED
            </p>
            <div class="flex flex-col justify-center lg:flex-row  lg:justify-start space-x-2 mt-5 ">
              <img src={download1} className="h-20 " alt="" />
              <img src={download2} className="h-20 " alt="" />
            </div>
          </div>

          {/**show only small device... */}
          {/* <div className='lg:hidden'>
					<span class="inline-block w-full py-5 text-2xl leading-none text-center whitespace-nowrap shadow-lg align-baseline font-bold bg-blue-900 bg-opacity-80 text-white rounded">SAVE 40%</span>
					<h1 class="text-2xl  font-bold lg:text-white lg:text-start mt-5 mb-5">
						Buy Flat in  <span className='text-blue-900 '>Bashundhara</span> </h1>
				</div> */}
          {/**left flex...end */}

          {/**right flex..start */}
          <div className="  rounded-lg shadow-2xl  xl:w-[32%]  lg:mb-10 bg-opacity-60 ">
            <img src={phoneimg} className="h-[500px]" alt="" />
          </div>
          {/**right flex..end */}
        </div>
      </div>
      {/**hero div ...end */}

      <div className=" mx-auto bg-black">
        {/**	<div className="flex flex-col lg:flex-row justify-center items-center ">
			<div>
				<img src={Div2img} alt="" />
			</div>
			<div className='p-2 text-justify lg:p-0'>
				<p className='text-lg lg:text-2xl font-bold px-3 border-l-8 border-red-500 mb-5'>Get Started In 15 Minutes</p>
				<p className='mb-2 max-w-lg text-sm'>We are doing everything we can to make the platform easy to use. You will be fully on board and start working closer together with your families in less than 15 minutes.</p>

				<p className='max-w-lg text-sm'>No need for extensive training or courses. Works smoothly with your existing business and applications.</p>
			</div>



		</div> */}
        {/**2ND SECTION... START */}
        <div className="p-2 mb-4 ">
          <div>
            <div className="text-center">
              <h1 className="text-2xl text-[#C1332D] font-medium">
                UNIVERSE ENTERTAINMENT ORIGINALS
              </h1>
              <p className="text-white p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                sint vitae illum, ratione ad distinctio molestiae laudantium,
                explicabo a eveniet cum praesentium pariatur dicta id tempore?
                Fuga, repellat expedita temporibus dicta cum numquam esse nulla
                consectetur a sapiente, modi quibusdam praesentium eaque
                repudiandae enim laudantium! Ipsa, corrupti? Placeat, maiores
                eveniet.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 justify-center mb-10">
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-lg">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6 bg-red-700 rounded-b-md">
                  <h5 class="text-white text-xl font-medium text-center mb-2">
                    EVENT 1
                  </h5>
                  <p class="text-white text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to
                    build on the card title and make up the bulk of the card's
                    content.
                  </p>
                  {/* <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    VIEW MORE
                  </button> */}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-lg">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6 bg-red-700 rounded-b-md">
                  <h5 class="text-white text-xl  text-center font-medium mb-2">
                    EVENT 2
                  </h5>
                  <p class="text-white text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to
                    build on the card title and make up the bulk of the card's
                    content.
                  </p>
                  {/* <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    VIEW MORE
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <hr className="h-[1px] mx-auto  bg-red-700  mt-2 lg:mt-5 mb-2 lg:mb-5" /> */}

        <div className="p-5 ">
          <div className="bg-img2 w-full h-full p-5 rounded-md">
            {/* <img src={phonebg} className  alt="" /> */}
            <h1 className="p-2 lg:text-5xl max-w-[800px] ">
              Watch <span className="text-red-700 ">UNIVERSE ENTERTAIMENT</span>{" "}
              we are create something <span className="text-black">BIG </span>
              beyound your imagination <br />{" "}
              <span className="text-red-700 ">
                what are you waiting for <br /> Download NOW{" "}
              </span>
            </h1>
            <div class="flex flex-col lg:flex-row justify-start lg:justify-end mt-72  ">
              <img src={download1} className="h-20 " alt="" />
              <img src={download2} className="h-20 " alt="" />
            </div>
          </div>
        </div>

        <section className="container px-10 mx-auto mt-20">
          <div className="text-center my-5 text-3xl font-bold text-[#d42e18]">
            Meet our Board Member
          </div>
          <Carosule></Carosule>
        </section>

        <div className="text-center mb-12 text-3xl font-bold text-[#d42e18]">
          Our Events
        </div>
        <div className="flex flex-col lg:flex-row gap-5 justify-center ">
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-lg">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6 bg-red-700">
                  <h5 class="text-white text-xl font-medium text-center mb-2">
                    EVENT 1
                  </h5>
                  <p class="text-white text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to
                    build on the card title and make up the bulk of the card's
                    content.
                  </p>
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="flex justify-center">
              <div class="rounded-lg shadow-lg bg-white max-w-lg">
                <a href="#!">
                  <img
                    class="rounded-t-lg"
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    alt=""
                  />
                </a>
                <div class="p-6 bg-red-700">
                  <h5 class="text-white text-xl  text-center font-medium mb-2">
                    EVENT 2
                  </h5>
                  <p class="text-white text-base mb-4">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.Some quick example text to
                    build on the card title and make up the bulk of the card's
                    content.
                  </p>
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    VIEW MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 justify-center mt-16 ">
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
              <div class="rounded-lg shadow-lg  max-w-sm">
                <a href="#!">
                  <img
                    class="rounded-t-lg w-[60%] mx-auto"
                    src={Project4}
                    alt=""
                  />
                </a>
                <div class="p-6 ">
                  <h5 class="text-white text-xl  text-center font-medium mb-2">
                    Services
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
      </div>
    </div>
  );
}

export default Home;
