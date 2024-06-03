import { Helmet } from "react-helmet-async";
import Slider from "../Carousel/Carousel";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
         <Slider/>
           
        </div>
    );
};

export default Home;