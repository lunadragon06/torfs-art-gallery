import { API } from "../../constants/api";
import axios from "axios";
import ErrorMessage from "../../common/ErrorMessage";
import Heading from '../../components/layout/Heading';
import Loader from "../layout/Loader";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function PaintingDetail() {
	const [painting, setPainting] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

    const http = API;

    let history = useNavigate();

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
			<section className="card">
			    <img src={painting.image.url} alt={painting.alt} />
				<article className="painting-content">
				    <Heading content={painting.title} />
                    <p>Painting no. {painting.id}</p>
				</article>
			</section>
		</>
	);
}

export default PaintingDetail;
