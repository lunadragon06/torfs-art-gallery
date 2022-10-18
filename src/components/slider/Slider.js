import {useState, useEffect} from "react";
import { HEADER } from "../../constants/header";

function Slider() { 
    const [sliders, setSlider] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(function () {
        async function fetchHeader() {
            try {
                const response = await fetch(HEADER);
                console.log(API);

                if(response.ok) {
                    const json = await response.json();
                    console.log(json);
                    setSlider(json);
                } else {
                    setError("An error occured!");
                }
            } catch(error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchHeader();
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
    <>
        {sliders.map(function (slider) {
                <img className="header" src={slider.hero_banner.url} alt={slider.hero_banner.alternativeText} width="100%" />
            })}
        </>
    );
}

export default Slider; 
