import { API } from "../../constants/api";
import axios from "axios";
import ErrorMessage from "../../common/ErrorMessage";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader";
import PaintingItem from "./PaintingItem";
import Searchbar from "../layout/Searchbar";
import {useState, useEffect} from "react";

const api = API;

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
					console.log(response.data);
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
		<div className="gal" style={{ margin: '0 auto', maxWidth: '1000px', }}>
		    <Heading content="Gallery" />
			<div className="breadcrumb">
			        <Link to={`/`}>
				        Home
			        </Link>
					<span className="current-link"> / <b> Gallery</b></span>
				</div>
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
