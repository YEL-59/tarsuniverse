import React from "react";

import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import Logo from "../../assets/logo/logo.png";
import logo from "../../assets/logo/png-6.png";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import DraftsIcon from "@mui/icons-material/Drafts";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  const d = new Date();
  return (
    <div className=" bg-black   text-white ">
      <hr />
      <div className="mt-10 p-5 container mx-auto">
        <div className="flex justify-between flex-col text-center md:flex-row">
          <div>
            {/* <img src={logo} className=' h-20' alt="" /> */}
            <h1 className="text-3xl">TARS BINARY</h1>
            <div className="flex  justify-center gap-2">
              <div>
                <FacebookIcon />
              </div>
              <div>
                <LinkedInIcon  />
              </div>{" "}
              <div>
                <InstagramIcon/>
              </div>{" "}
              <div>
                <FacebookIcon />
              </div>{" "}
              <div>
                <YouTubeIcon />
              </div>
			  <div>
                <TwitterIcon/>
              </div>
            </div>
          </div>
<div className="flex flex-col lg:flex-row text-center gap-16">
<div>
            <ul>
              {/* <h1 className="md:text-lg text-md font-bold "> TARS BINARY</h1> */}

              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - About Us
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                -Contact Us
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - Service
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - Help center
              </li>
            </ul>
          </div>
          <div>
            <ul>
              {/* <h1 className="md:text-lg text-md font-bold "> TARS BINARY</h1> */}

              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - universe
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                -Events
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - Gallery
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - News
              </li>
            </ul>
          </div>
          <div>
            <ul>
              {/* <h1 className="md:text-lg text-md font-bold "> TARS BINARY</h1> */}

              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - Engineering Volunteers
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                -Engineering School
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - Projects
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
                - Defense Projects
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
			  Administration
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
			  Board Members
              </li>
              <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
			  Director’s Note
              </li>
            </ul>
          </div>
</div>
         
        </div>
      </div>

      <div className="flex flex-col lg:flex-row text-center justify-center mt-10 mb-5 gap-5 ">
        <p>Privacy&Policy</p>
        <p>Legal Papers</p>
        <p>Documents</p>
        <p>Intellegence property</p>
        <p>Apply for job</p>
      </div>

      <div className=" text-xsm  text-center bg-black w-full">
        <div className="flex flex-col lg:flex-row text-white  justify-evenly items-center">
          <div className="text-center text-lg font-normal py-2">
            &copy; {d.getFullYear()} TARS BINARY{" "}
            <a href="https://github.com/YEL-59">.</a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
