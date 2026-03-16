import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Doctors from '../../Components/Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Services from '../../Components/Services/Services';


const Home = () => {
    const doctors = useLoaderData();
    return (
        <div className='max-w-6xl mx-auto'>
            <Banner></Banner>
        
            <Doctors data={doctors} key={doctors.id}></Doctors>
            <Services></Services>
            
            
        </div>
    );
};

export default Home;