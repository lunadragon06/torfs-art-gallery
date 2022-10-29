import axios from 'axios';
import { Carousel } from 'react-bootstrap';
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
        <Carousel interval={null}>
            {slide.map(function (slider) {
            return <Carousel.Item key={slider.id} id={slider.id}>
                <img className="d-block w-100"
                     src={slider.image[0].url}
                     alt={slider.title}
                     style={{
                        filter: 'brightness(90%)',
                        height: 600,
                        objectFit: 'cover',
                     }}
                />
                <Carousel.Caption>
                    <h2>{slider.title}</h2>
                    <p>{slider.year} | {slider.category}</p>
                </Carousel.Caption>
                </Carousel.Item>
            })}
        </Carousel>
    )
}

export default Slider;
