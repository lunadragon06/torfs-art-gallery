import { API } from "../../constants/api";
import axios from "axios";
import ErrorMessage from "../../common/ErrorMessage";
import PaintingItem from "./PaintingItem";
import Heading from "../layout/Heading";
import Loader from "../layout/Loader";
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
		return <ErrorMessage message={`Error: ${error}`} />;
	}

    return (
		<>
		    <Heading content="Gallery" />
		    <section className="gallery">
			    {paintings.slice(0).reverse().map(function (painting) {
				    const { id, title, image, category } = painting;
				    return <PaintingItem key={id} id={id} title={title} image={image} category={category} />;
			    })}
		    </section>
		</>
    );
}

export default PaintingList; 
