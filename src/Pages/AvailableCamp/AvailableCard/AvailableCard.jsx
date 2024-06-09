/* eslint-disable react/prop-types */

import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

const AvailableCard = ({data}) => {
    const {
        campName,
        image,
        campFees,
        dateTime,
        location,
        healthcareProfessionalName,
        participantCount,
        description,
        _id
    } = data;

    return (
        <div className="flex">
        <Card className="max-w-sm flex  border-2 flex-col">
            <img className="h-48 hover:scale-105 transition-transform duration-300 w-full object-cover" src={image} alt="" />
            <div className="flex flex-col justify-between p-4">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {campName}
                </h5>
                <div className="space-y-2 ">
                    <p>{campFees}</p>
                    <p>{dateTime}</p>
                    <p>{location}</p>
                    <p>{healthcareProfessionalName}</p>
                    <p>{participantCount}</p>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    {description}
                </p>
            </div>
            <div >
                <Link to={`/Details/${_id}`}>
                    <button className="relative overflow-hidden px-4 py-2 text-white font-semibold transition-transform duration-300 bg-gray-600 rounded-md hover:scale-105">
                        View Details
                        <span className="absolute inset-0 bg-black opacity-20"></span>
                    </button>
                </Link>
            </div>
        </Card>
    </div>
    );
};

export default AvailableCard;