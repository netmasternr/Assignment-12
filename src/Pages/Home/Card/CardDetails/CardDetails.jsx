import { useParams } from "react-router-dom";
import UseAxiosSecure from "../../../../Components/Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CardDetails = () => {
    const axiosSecure = UseAxiosSecure();
    const { id } = useParams();

    const { data: campData = {}, isLoading } = useQuery({
        queryKey: ['camp', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/addCamp/${id}`)
            
            return data
        }
    })

    if (isLoading) return <p>Loading...</p>;




    return (
        <div className="pt-16 mb-5 max-w-4xl mx-auto overflow-hidden bg-white rounded-lg pb-3 shadow-md">
           <img className="object-cover w-full rounded-lg h-64 transition-transform duration-300  hover:scale-95" src={campData.image} alt="Article" />

            <div className="p-6">

                <div className="space-y-5 pb-5">
                    <h1>
                        Camp Name: {campData.campName}
                    </h1>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Description: {campData.description}</p>

                    <div className="flex gap-3">
                        <p>Camp Fee: {campData.campFees} </p>

                        <p>Location: {campData.location} </p>
                    </div>

                    <div className="space-y-5">
                        <p>Date and Time: {campData.dateTime} </p>
                        <p>Healthcare Professional: {campData.healthcareProfessionalName} </p>
                        <p>participant count: {campData.participantCount} </p>


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