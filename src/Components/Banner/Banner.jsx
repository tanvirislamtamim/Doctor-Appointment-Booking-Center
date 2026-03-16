import React from 'react';

const Banner = () => {
    return (
        <div className='max-w-6xl items-center mx-auto bg-white rounded-2xl pb-5'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl mt-10 font-bold'>Dependable Care, Backed by Trusted  Professionals.</h1>
                <p className='text-lg mt-4 m-8 px-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='flex mt-6 justify-center mb-8' >
                <input type="text" placeholder='Search for doctors...' className='border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                <button className='ml-2 bg-blue-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600 transition-colors duration-300'>Search Now</button>
            </div>
            <div className='flex gap-4 mb-10 h-64 justify-center'>
                <img src="banner-img-1.png" alt="" />
                <img src="banner-img-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;