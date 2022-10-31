import { API } from "../../../constants/api"
import axios from 'axios';
import { Carousel, Stack } from "react-bootstrap";
import ErrorMessage from "../../../common/ErrorMessage";
import Loader from "../../layout/Loader";
import React from 'react';
import { useState, useEffect } from 'react';

const url = API;

function Featured() {
    const [feature, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function axiosData() {
            try {
                const response = await axios.get(url);

                if (response.status === 200) {
                    setFeatured(response.data);
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
            {feature.filter(paint => paint.featured === true).map(function (feature) {
            return <Carousel.Item key={feature.id} id={feature.id} >
                <Stack
    direction="horizontal"
    className="h-100 justify-content-center align-items-center"
    gap={3}
  >
                        <img src={feature.image.url}
                             alt={feature.title}
                             onContextMenu={(e) => {
                                e.preventDefault(); 
                             }} 
                             style={{
                                width: '100%',
                            }}
                        />
                        </Stack>
                </Carousel.Item>
            })}
        </Carousel>
    )
}

export default Featured;
