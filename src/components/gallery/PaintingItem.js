import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PaintingItem({ id, title, category, image }) {
	return (
		<article className="painting">
		    <Link to={`#0`}>
				<img src={image.url} alt={image.alternativeText} width="100%" />
				<h2>{title}</h2> <p>Painting no. {id}</p>
				<span>{category}</span>
		    </Link>
		</article>
	);
}

PaintingItem.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.any.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired, 
};

export default PaintingItem;
