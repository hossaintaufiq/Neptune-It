import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const [detail, setDetail] = useState({});

    const { id } = useParams();

    const allData = useLoaderData();

    useEffect(() => {
        const findDetails = allData.find((detail) => detail.id == id)
        setDetail(findDetails);
    }, [id, allData]);

    const { name, image, description } = detail;

    return (
        <div className="w-3/4 mx-auto ">
            <img src={image} alt="" className="w-full" />

            <h2 className="card-title">{name}</h2>
            <p>{description}</p>


        </div>
    );
};

export default Details;