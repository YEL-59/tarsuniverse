import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { populerPlace } from '../data/data';
import PublicIcon from '@mui/icons-material/Public';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'none', background: 'black', marginTop: '-100px', borderRadius: '50%' }}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'none', background: 'black', marginTop: '-100px', borderRadius: '50%' }}
			onClick={onClick}
		/>
	);
}

function Carosule() {
	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 730,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="container  mx-auto h-full  rounded-[25px] mb-5 p-5">
			<Slider {...settings}>
				{populerPlace.map((item, index) => {
					return (
						<div key={index} className="cursor-pointer">
							<div className="w-[370px]  rounded-md overflow-hidden md:ml-1 ml-2">
								<img
									className="w-[370px] h-[270px] object-cover transition duration-700 ease-in-out hover:scale-105"
									src={item.img}
									alt="Sunset in the mountains"
								/>
                                <div className="p-2 bg-red-600   text-[#523970] text-center">
								<h1 className=" text-md mb-1 font-bold text-center">{item.title}</h1>
								<div className="mb-2 " >
								
										
										<span className=" text-[0.8rem] ">{item.country}</span>
									
								</div>
								
								{/* <div className="flex justify-between items-center  mb-2 text-[0.7rem]">
									<span className="">{item.package}</span>

									<span className="text-lg font-bold">{item.amount} BDT</span>
								</div> */}
								{/* <div className="flex justify-between items-center  mb-2 text-[0.8rem]">
									<button className="bg-[#523970] text-white px-2 rounded-lg text-[0.8rem]">BOOK NOW</button>

									<span className="font-bold">view details</span>
								</div> */}
							</div>
							</div>

							
						</div>
					);
				})}
			</Slider>
		</div>
	);
}

export default Carosule;