import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import SingleData from "./SingleData";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    const EventData = useLoaderData();



    return (
        <div>
            <Banner></Banner>

            <h2 className="text-4xl font-bold my-5 text-center" data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" >Events And Services</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-3/4 mx-auto" >
                {EventData.map((Data => <SingleData key={EventData.id} Data={Data}></SingleData>))}
            </div>
        </div>
    );
};

export default Home;