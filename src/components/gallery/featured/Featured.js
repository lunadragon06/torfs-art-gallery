import { API, BASE_URL } from "../../../constants/data"
import axios from 'axios';
import ErrorMessage from "../../../common/ErrorMessage";
import { HiArrowRight } from 'react-icons/hi'; 
import { Link } from "react-router-dom";
import Loader from "../../layout/Loader";
import React from 'react';
import SubHeading from "../../layout/SubHeading";
import { useState, useEffect } from 'react';

const url = BASE_URL + API;

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
        <section className="featured">
        <article className="subhead">
            <SubHeading subcontent="Featured paintings" />
            <Link to="/gallery" className="view">View all <HiArrowRight /></Link>
        </article>
        <div className="galleri">
            {feature.filter(paint => paint.featured === true).sort( (a,b) => a.id > b.id ? 1 : -1 ).reverse().map(function (feature) {
            return <article key={feature.id} id={feature.id} className="galleri_item" >
                <Link to={`painting/${feature.id}`} style={{ display: 'block', padding: '0', }}>
                        <img src={feature.image.url}
                             alt={feature.title}
                             onContextMenu={(e) => {
                                e.preventDefault(); 
                             }} 
                        />
                        <div className="galleri_content">
							<span className="galleri_detail">
							    <h3 style={{ fontSize: '20px', }}>{feature.title}</h3>
								<p style={{ fontSize: '16px', textTransform: 'capitalize', }}>
									{feature.category} | {feature.year}
								</p>
							</span>
						</div>
                        </Link>
                </article>
            })}
        </div>
        </section>
    )
}

export default Featured;
