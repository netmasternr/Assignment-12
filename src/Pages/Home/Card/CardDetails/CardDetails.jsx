import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
    const { _id } = useParams();
    const idInt = parseInt(_id);
    const [cardDetails, setCardDetails] = useState([]);
    // console.log(cardDetails)


    useEffect(() => {
        const getDetails = async () => {
            try {
                const { data } = await axios('/camp.json');

                const cardDetails = data.find(camp => camp._id === idInt);
                setCardDetails(cardDetails)
            }
            catch (error) {
                // 
            }
            finally {
                // 
            }
        };
        getDetails();
    }, [idInt]);


    return (
        <div className="pt-16 mb-5 max-w-4xl mx-auto overflow-hidden bg-white rounded-lg pb-3 shadow-md">
           <img className="object-cover w-full rounded-lg h-64 transition-transform duration-300  hover:scale-95" src={cardDetails.image} alt="Article" />

            <div className="p-6">

                <div className="space-y-5 pb-5">
                    <h1>
                        Camp Name: {cardDetails.campName}
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Description: {cardDetails.description}</p>

                    <div className="flex gap-3">
                        <p>Camp Fee: {cardDetails.campFees} </p>

                        <p>Location: {cardDetails.location} </p>
                    </div>

                    <div className="space-y-5">
                        <p>Date and Time: {cardDetails.dateTime} </p>
                        <p>Healthcare Professional: {cardDetails.healthcareProfessionalName} </p>
                        <p>participant count: {cardDetails.participantCount} </p>


                        <div className="text-center">
                            <button className="p-3 bg-gray-400 rounded-md hover:bg-orange-400
                            transition-transform duration-300 
                            hover:scale-105 ">Join camp modal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;