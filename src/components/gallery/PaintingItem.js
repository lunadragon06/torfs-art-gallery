import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PaintingItem({ id, image }) {
	return (
		    <span>
		            <Link className="link" to={`painting/${id}`}>
						<div className="img-hover-zoom">
				            <img src={image.url} 
							     alt={image.alternativeText} 
								 width="100%" 			     
								 onContextMenu={(e) => {
									e.preventDefault(); 
								}} 
							/>
						</div>
		            </Link>
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
