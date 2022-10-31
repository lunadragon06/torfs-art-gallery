import { API } from "../../../constants/api"
import axios from 'axios';
import { Carousel, Card, Stack } from "react-bootstrap";
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
        <div className="bg-dark bg-opacity-25 container-fluid">
        <Carousel interval={null} style={{ height: 500 }}>
            {feature.filter(paint => paint.featured === true).map(function (feature) {
            return <Carousel.Item key={feature.id} id={feature.id} style={{ height: 500 }}>
                <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={3}
              >
                <Card style={{ width: "18rem" }}>
                                  <Card.Body>
                    <Card.Title>{feature.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                    </Stack>
                </Carousel.Item>
            })}
        </Carousel>
        </div>
    )
}

export default Featured;
