/* eslint-disable react-hooks/set-state-in-effect */



import { FiAlertCircle } from "react-icons/fi";
import SingleDetails from '../SingleDetails/SingleDetails';
import { useLoaderData, useParams } from 'react-router';
import { useEffect, useState } from "react";


const DoctorDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [doctor, setDoctor]= useState([]);
    
    useEffect(()=>{
        const singleDoctor = data.find(d => d.id == id);
        
        setDoctor(singleDoctor);
    },[data, id])
    
    
    
    
    return (
        <div className='mb-10'>
           <section className='max-w-6xl items-center mx-auto bg-white rounded-2xl pb-5 mt-10 pt-10'>
            <h1 className='text-4xl font-bold flex justify-center '>Doctor’s Profile Details</h1>
            <p className='mx-12 text-center pb-10 pt-3'>A doctor diagnoses illnesses, treats patients, provides medical advice, and helps people maintain good health through care, compassion, and professional knowledge.</p>
           </section>


            <SingleDetails doctor={doctor}></SingleDetails>

           <section className='max-w-6xl items-center mx-auto bg-white rounded-2xl pb-5 mt-10 pt-10'>
            <div>
                <h1 className='text-3xl font-bold flex justify-center '>Book an Appointment</h1>
                <div className='flex justify-between mx-12 mt-5'>
                    <h3 className='font-semibold'>Availability</h3>
                    <h3 className='border border-green-500 bg-green-100 text-green-800 rounded-4xl px-2'>Doctor Available Today</h3>

                </div>
                <div className='flex items-center gap-2 mx-12 mt-5 bg-yellow-100 borde rounded-4xl px-2 text-yellow-500'>
                    <p><FiAlertCircle /></p>
                    <p>  Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                </div>

            </div>
            <div className='flex justify-center mt-10 mb-10'>
                <button className='bg-blue-500 text-white px-100 py-2 rounded-4xl hover:bg-blue-600 '>Book Appointment Now</button>
            </div>
           </section>
           
        </div>
    );
};

export default DoctorDetails;