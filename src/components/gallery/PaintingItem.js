import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PaintingItem({ id, title, category, image }) {
	return (
		    <span>
				<figure>
		            <Link to={`painting/${id}`}>
				        <img src={image.url} alt={image.alternativeText} width="100%" />
		            </Link>
				</figure>
			</span>
	);
}

PaintingItem.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.any.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired, 
};

export default PaintingItem;
