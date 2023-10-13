// import React from 'react';

import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const SingleData = ({ Data }) => {
    useEffect(()=>{
        Aos.init();
    },[])


    const { id, name, image, price, description, button_text } = Data;
    return (
        <div className="card card-compact bg-base-100 shadow-xl "  data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <figure><img src={image} alt=""  className="h-52 w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between flex items-center">
                   <h2>{price}</h2>
                    <Link to={`/Data/${id}`}>
                    <button className="btn btn-primary">{button_text}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleData;