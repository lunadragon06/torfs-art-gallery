import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PaintingItem({ id, image }) {
	return (
		            <Link className="img" to={`painting/${id}`}>
				        <img src={image.url} 
							 alt={image.alternativeText} 
							 width="300px"		     
							 onContextMenu={(e) => {
								e.preventDefault(); 
							}} 
						/>
		            </Link>
	);
}

PaintingItem.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.any.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired, 
};

export default PaintingItem;
