import { API, BASE_URL } from "../../constants/data";
import axios from "axios";
import ErrorMessage from "../common/ErrorMessage";
import Heading from "../layout/typography/Heading";
import { HiArrowLeft } from 'react-icons/hi'; 
import { Link } from "react-router-dom";
import Loader from "../layout/Loader";
import PaintingItem from "./PaintingItem";
import Searchbar from "../layout/ui/Searchbar";
import {useState, useEffect} from "react";

const api = BASE_URL + API;

function PaintingList() {
    const [paintings, setPainting] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
		async function fetchPaintings() {
			try {
                const response = await axios.get(api);
                if (response.status === 200) {
                    setPainting(response.data);
                } else {
                    setError("A server error occured! Failed to upload paintings.");
					console.log(setError);
                }
            } catch (error) {
                setError(error.toString());
                console.log(error);
            } finally {
                setLoading(false);
            }
		}
		fetchPaintings();
	}, []);

    if (loading) {
		return <Loader />;
	}
	if (error) {
		return <>
		            <ErrorMessage message={`Error: ${error}.`} />
				</>
	}

    return (
		<div className="gal" 
		     style={{ margin: '0 auto', maxWidth: '1000px', }}
			>
			<Link to="/" 
			      className="view" 
				  style={{ display: 'inline-block', marginBottom: '2.5rem' }}>
					<HiArrowLeft /> Back to homepage
			</Link>
		    <Heading content="Gallery" />
				<Searchbar />
				<section className="galleri">
			        {paintings.sort( (a,b) => a.id > b.id ? 1 : -1 ).reverse().map(function (painting) {
				        const { id, title, image, category, year } = painting;
				        return <PaintingItem key={id} id={id} title={title} image={image} category={category} year={year} />;
			        })}
				</section>
		</div>
    );
}

export default PaintingList; 
