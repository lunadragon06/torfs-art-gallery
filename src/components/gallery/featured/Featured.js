import { API } from "../../../constants/api"
import axios from 'axios';
import ErrorMessage from "../../../common/ErrorMessage";
import { Link } from "react-router-dom";
import Loader from "../../layout/Loader";
import React from 'react';
import SubHeading from "../../layout/SubHeading";
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
        <section className="featured">
        <SubHeading subcontent="Featured paintings" />
        <div className="gallery">
            {feature.filter(paint => paint.featured === true).sort( (a,b) => a.id > b.id ? 1 : -1 ).reverse().map(function (feature) {
            return <article key={feature.id} id={feature.id} className="galleri_item" >
                <Link to="#" style={{ display: 'block', padding: '0', }}>
                        <img src={feature.image.url}
                             alt={feature.title}
                             onContextMenu={(e) => {
                                e.preventDefault(); 
                             }} 
                        />
                        <div className="galleri_content">
							<span className="galleri_detail">
							    <h3 style={{ fontSize: '20px', }}>{feature.title}</h3>
								<p style={{ textTransform: 'capitalize', }}>
									{feature.category} | {feature.year}
								</p>
							</span>
						</div>
                        </Link>
                </article>
            })}
        </div>
        <Link to="/gallery" className="cta" style={{ display: 'block', textAlign: 'center', }}>View gallery</Link>
        </section>
    )
}

export default Featured;
