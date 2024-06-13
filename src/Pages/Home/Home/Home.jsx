import { Helmet } from "react-helmet-async";
import Slider from "../Carousel/Carousel";
import HomeCard from "../Card/Card";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Components/Hooks/UseAxiosPublic/UseAxiosPublic";
import { Spinner } from "flowbite-react";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const Home = () => {
    const axiosPublic = UseAxiosPublic()

    const { data: campsData = [], isLoading } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('/addCamp')
            return data
        }
    })


    if (isLoading) return <div className="flex flex-wrap gap-2">
        <div className="text-left">
            <Spinner aria-label="Left-aligned spinner example" />
        </div>
        <div className="text-center">
            <Spinner aria-label="Center-aligned spinner example" />
        </div>
        <div className="text-right">
            <Spinner aria-label="Right-aligned spinner example" />
        </div>
    </div>;

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider />

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {campsData.map((data) => <HomeCard key={data._id} data={data} />)}
            </div>

            <div className="text-center font-bold text-xl mt-10">
                <Link to='/availableCamp'>
                    <AwesomeButton type="primary" color="red">
                        See All Camps
                    </AwesomeButton>

                </Link>
            </div>

            <div className="flex justify-center mt-10">
                {/* feedback */}
                <FeedbackCard />
            </div>
        </div>
    );
};

export default Home;
