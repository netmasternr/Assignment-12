import { Helmet } from "react-helmet-async";
import Slider from "../Carousel/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "../Card/Card";
import { Link } from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
const Home = () => {
    const [campData, setCampData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios('camp.json');
                setCampData(data);
                setLoading(false);
            } catch (error) {
                //    
            }
        };
        getData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider />

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {campData.map((data) => <HomeCard key={data._id} data={data} />)}
            </div>

            <div className="text-center font-bold text-xl mt-10">
                <Link to='/availableCamp'>
                    <AwesomeButton type="primary" color="red">
                    See All Camps
                    </AwesomeButton>

                </Link>
            </div>
        </div>
    );
};

export default Home;
