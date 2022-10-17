import { API } from "../../constants/api";
import axios from "axios";
import ErrorMessage from "../../common/ErrorMessage";
import Heading from '../../components/layout/Heading';
import { Link } from "react-router-dom";
import Loader from "../layout/Loader";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function PaintingDetail() {
	const [painting, setPainting] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    const http = API;

    let history = useHistory();

    const { id } = useParams();

    if (!id) {
        history.push("/");
    }

	useEffect(
		function () {
			async function fetchDataDetail() {
				try {
                    const response = await axios.get(http + "/" + id);
                    console.log(response);
                if (response.status === 200) {
                    console.log(response);
					setPainting(response.data);
                } else {
                    setError("Failed to upload this painting! Please try again later.");
                }
                } catch (error) {
                    setError(error.toString());
                } finally {
                    setLoading(false);
                }
            }
			fetchDataDetail();
		}, 
	);

	if (loading) {
		return <Loader />;
	}
	if (error) {
		return <ErrorMessage message={`Error: ${error}`} />;
	}

	return (
		<>
			<Heading content={painting.title} />
			<section className="painting">
				<article className="painting-image">
				{/* MODAL START */}
				<input type="checkbox" id="modal" />
				<label htmlFor="modal" className="premodal">
					<div className="img-hover-zoom">	
			        <img src={painting.image.url} 
				         alt={painting.image.alternativeText} 
					     onContextMenu={(e) => {
						 e.preventDefault(); 
					    }} 
				    />
					</div>
				</label>
				<label htmlFor="modal" className="modal-background" />
				<div className="modal">
				    <label htmlFor="modal">
					    <img src={painting.image.url} 
				             alt={painting.image.alternativeText} 
					         onContextMenu={(e) => {
						        e.preventDefault(); 
					        }} 
				        />
				    </label>
				</div>
				{/* MODAL END */}
				</article>
				<article className="painting-content">
					<div className="painting-titles">
                        <h2><b>Painting no.</b> {painting.id}</h2>
					    <span className="category-tag">{painting.category}</span>
					</div>
					<p>{painting.description}</p>
				</article>
			</section>
			<Link to={`/gallery`}>Back to gallery</Link>
		</>
	);
}

export default PaintingDetail;
