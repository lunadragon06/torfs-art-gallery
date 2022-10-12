import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PaintingItem({ id, title, image, alt }) {
	return (
		<article className="painting">
		    <Link to={`#0`}>
				<img src={image.url} alt={alt} width="100%" />
				<h2>{title}</h2> <p>Painting no. {id}</p>
		    </Link>
		</article>
	);
}

PaintingItem.propTypes = {
	alt: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default PaintingItem;
