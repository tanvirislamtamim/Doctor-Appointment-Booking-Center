import React, { useState } from 'react';
import DoctorDetails from '../../Pages/DoctorDetails/DoctorDetails';
import { Link } from 'react-router';



const Doctors = ({ data }) => {
    const [showAll, setShowAll] = useState(false);

    const visibleDoctors = showAll ? data : data.slice(0, 6);
    const [text, setText] = useState("View All Doctors");
    const handleButtonClick = () => {
        setShowAll(!showAll);
        setText(showAll ? "View All Doctors" : "View Less Doctors");
    }

    
      
   
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-4xl mx-auto text-center font-bold'>Our Best Doctors</h1>
            <p className=' w-3/4 mx-auto text-center mt-5 mb-10'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {visibleDoctors.map(doctor => (
                    <div key={doctor.id} className="card bg-base-100 w-88 shadow-sm ">
                        <figure className="px-10 pt-10">
                            <img
                            src={doctor.image}
                            alt={doctor.name}
                            className="rounded-xl" />
                        </figure>
                        <div className=" gap-4 flex mx-auto mt-1 items-center text-center">
                            <p className='border border-green-500 rounded-4xl bg-green-100 text-sm p-1'><small>{doctor.slots}</small></p>
                            <p className='border border-blue-500 rounded-4xl bg-blue-100 text-sm p-1'><small>{doctor.experience}</small></p>
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{doctor.name}</h2>
                            <p>{doctor.education}</p>
                            <div className='border-t-2 border-dashed border-gray-300 px-40'></div>
                            <p>Reg Num: {doctor.registration_number}</p>
                            
                            <Link to={`/doctorDetails/${doctor.id}`} className="card-actions">
                                <button className="border mt-1.5 border-blue-500   p-1 px-7 rounded-4xl bg-blue-500 text-white flex justify-center items-center">View Details</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='flex justify-center mt-4'>
                <button onClick={()=>{
                     handleButtonClick(!text)
                     if(showAll) {
                        window.scrollTo({ top: 700,  behavior: 'smooth'})
                     };
                     }} className="border mt-1.5 border-blue-500   p-1 px-7 rounded-4xl bg-blue-500 text-white flex justify-center items-center">{text}</button>
            </div>
            
        </div>
    );
};

export default Doctors;