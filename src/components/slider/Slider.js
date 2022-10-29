import axios from 'axios';
import ErrorMessage from "../../common/ErrorMessage";
import { HEADER } from '../../constants/header';
import Loader from "../layout/Loader";
import React from 'react';
import { useState, useEffect } from 'react';

const url = HEADER;

function Slider() {
    const [slide, setSlider] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function axiosData() {
            try {
                const response = await axios.get(url);

                if (response.status === 200) {
                    setSlider(response.data);
					console.log(response.data);
                } else {
                    setError("An error occurred");
                }
            } catch (error) {
                setError(error.toString());
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        axiosData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        console.log(error);
        return <ErrorMessage message={`Error: ${error}.`} />
    }

    return (
        <>
        {slide.map(function (slider) {
            return <main className="header" 
                         key={slider.id} 
                         id={slider.id} 
                         style={{
                            backgroundImage: "url(" + slider.image[0].url + ")", backgroundPosition: 'center',
                            backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                    }}>
                   </main>
            })}
        </>
    )
}

export default Slider;
