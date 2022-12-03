import React from 'react';

import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Logo from '../../assets/logo/logo.png';
import logo from '../../assets/logo/png-6.png';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import DraftsIcon from '@mui/icons-material/Drafts';

function Footer() {
	const d = new Date();
	return (
		<div className=" bg-black   text-white ">
			<hr />
			<div className="mt-10 p-5 container mx-auto">
				<div className="flex justify-center flex-col md:flex-row ml-28 gap-16">
					<div className="  max-w-sm">

						{/* <img src={logo} className=' h-20' alt="" /> */}
						<h1 className='text-2xl'>TARS BINARY</h1>
						<h3>HIGHER AUTHORITY OF TARS PROJECTS</h3>
						
						<p className='text-sm '>Level 4 Vision 2021 Tower 1</p>
						<p className='text-sm '>Software Technology Park</p>
						<p className='text-sm '>Karwan Bajar Dhaka 1215</p>
						<p className='text-sm '>Contact@tarsbinary.net</p>
						<p className='text-sm '>+0081714065174</p>
					</div>

					<div><ul className="md:w-[300px]  font-medium ">
						<h1 className="md:text-lg text-md font-bold "> TARS BINARY</h1>

						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Administration</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">-Board Members</li>
                                                <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Director's Note</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Engineering Volunteers</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							- Engineering School</li>

					</ul></div>
					<div>
					<ul className="md:w-[300px]">
					<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">Universe</li>
                                                <li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							Events</li>
						<li className="md:text-sm text-xsm mb-2 hover:text-blue-900">
							Gallery</li>
		
					</ul>
					</div>
					
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
					<div className="text-center py-2">&copy; {d.getFullYear()} TARSBINARY <a href="https://github.com/YEL-59">.</a> </div>
					
				</div>


			</div>
		</div>
	);
}

export default Footer;
