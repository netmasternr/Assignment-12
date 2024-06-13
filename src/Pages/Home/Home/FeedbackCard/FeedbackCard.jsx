import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../../Components/Hooks/UseAxiosPublic/UseAxiosPublic";
import { FaRegStar } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";

const FeedbackCard = () => {
    const axiosPublic = UseAxiosPublic();

    const { data: feedbacks = [] } = useQuery({
        queryKey: ['feedbackCard'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/feedback')
            return data
        }
    })
    console.log(feedbacks)

    return (
        <div>
            <h1 className="text-center text-2xl"> Total feedback: {feedbacks.length}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 ">
                {
                    feedbacks.map(feedback => <div key={feedback._id}
                        className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={feedback.image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold"> {feedback.name}</h4>

                                </div>
                            </div>
                            <div className="flex items-center space-x-2 dark:text-yellow-700">
                                <LiaStarSolid />
                                <span className="text-xl font-bold">{feedback.rating} </span>
                            </div>
                        </div>
                        <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                            <p> {feedback.message}</p>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeedbackCard;