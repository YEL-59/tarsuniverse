import React from 'react';

import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Logo from '../../assets/logo/logo.png';
import logo from '../../assets/logo/png-6.png';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DraftsIcon from '@mui/icons-material/Drafts';

function Footer() {
	const d = new Date();
	return (
		<div className="w-full bg-black   text-white ">
			<hr />
			<div className="container mx-auto mt-10 p-5">
				<div className="flex justify-between flex-col md:flex-row gap-5">
					<div className="flex flex-col  max-w-sm">

						{/* <img src={logo} className=' h-20' alt="" /> */}
						<h1>TARS BINARY</h1>
						<h3>HIGHER AUTHORITY OF TARS PROJECTS</h3>
						
						<p className='text-sm '>Level 4 Vision 2021 Tower 1</p>
						<p className='text-sm '>Software Technology Park</p>
						<p className='text-sm '>Karwan Bajar Dhaka 1215</p>
						<p className='text-sm '>Contact@tarsbinary.net</p>
						<p className='text-sm '>+0081714065174</p>
					</div>

					<ul className="md:w-[300px]  font-medium ">
						<h1 className="md:text-lg text-md font-bold mb-5"> TOP FEATURES</h1>

						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Administration</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">-Board Members</li>
                                                <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Director's Note</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Engineering Volunteers</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Engineering School</li>

					</ul>
					<ul className="md:w-[300px]">
					<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">Universe</li>
                                                <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							Events</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							Gallery</li>
						
						{/* <h1 className="md:text-lg text-md font-bold mb-5"> CONTACT US</h1> */}
						{/* <span className="flex items-center gap-2">
							<MapsHomeWorkIcon />
							<li className="md:text-sm text-xsm mb-2">Mirpur DOHS 9/A ave 11RD, Mirpur-12</li>
						</span>

						<span className="flex items-center gap-2">
							<DraftsIcon />
							<li className="md:text-sm text-xsm mb-2">

								genexpropertiesltd@gmail.com
								
								</li>
						</span>
						<span className="flex items-center gap-2">
							<PhoneEnabledIcon />
							<li className="md:text-sm text-xsm mb-2">01748885444</li>
						</span> */}
					</ul>
					
				</div>
				

			</div>
			
			<div className='flex flex-row justify-center gap-5 '>
					<p>Privacy&Policy</p>
					<p>Legal Papers</p>
					<p>Documents</p>
					<p>Apply for job</p>
					</div>
				
			<div className=" text-xsm  text-center bg-black w-full">
				<div className="flex flex-col lg:flex-row text-white  justify-evenly items-center">
					<div className="text-center py-2">Copyright &copy; {d.getFullYear()} All right reserved <a href="https://github.com/YEL-59">.</a> </div>
					{/* <div className='flex items-center gap-5 '>
						<p className='text-xsm   border-r-2 border-red-500 px-4 '> <span className='text-red-500 text-lg'>T</span>erm & <span className='text-red-500 text-lg'>C</span>ondition</p>
						<p className='text-xsm'><span className='text-red-500 text-lg'>P</span>rivacy <span className='text-red-500 text-lg'>P</span>olicy</p>
					</div> */}
					{/* <div className="flex flex-wrap ">
						<img src={Logo} className='h-4  rounded' alt="" />
						<a href="https://github.com/YEL-59">.</a>
					</div> */}
				</div>


			</div>
		</div>
	);
}

export default Footer;
