import { FaRegCopyright } from "react-icons/fa";

const SingleDetails = ({doctor}) => {
    const {name,image,bio,education,registration_number,available_days,fee} = doctor;
    

    return (
        <div className='max-w-6xl  mx-auto bg-white rounded-2xl pb-10 mt-10 pt-10 flex px-10 gap-5'>
            <div>
                <img className='h-80 rounded-2xl ' src={image} alt="" />
            </div>
            <div>
                <h1 className="text-5xl font-semibold my-4">{name}</h1>
                <p className="text-gray-500 pb-4">{education}</p>
                <p className="font-semibold pb-4">Bio: {bio}</p>
                <p className="flex items-center gap-3 pb-4"><FaRegCopyright /> reg: {registration_number}</p>
                <div className="pb-4"><span className="font-semibold">Availability </span>
                    {
                        available_days?.map((day, index) => (
                            <span
                                key={index}
                                className="text-yellow-500 bg-yellow-100 mx-2 px-3 py-1 rounded-full text-sm">
                                {day}
                            </span>
                        ))
                    }
                </div>
                <p><span className="font-semibold">Consultation Fee:</span> <span className="text-blue-500">Taka:{fee}</span> (incl. Vat) Per <span className="text-blue-500">consultation</span></p>
            </div>
        </div>
    );
};

export default SingleDetails;