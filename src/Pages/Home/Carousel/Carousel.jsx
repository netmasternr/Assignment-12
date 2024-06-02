import { Carousel } from "flowbite-react";
import img1 from '../../../assets/Slider/rendering-anime-doctors-work.jpg'
import img2 from '../../../assets/Slider/pexels-pixabay-356040.jpg'
import img3 from '../../../assets/Slider/pexels-googledeepmind-17484970.jpg'

const Slider = () => {
    return (
        <div className="h-44  md:h-72 lg:h-96">
        <Carousel slideInterval={5000}>
          <img src={img1} alt="..." className="" />
          <img src={img2} alt="..." className="" />
          <img src={img3} alt="..." className="" />
        </Carousel>
      </div>
    );
};

export default Slider;