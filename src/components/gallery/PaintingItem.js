import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import SubHeading from "../layout/SubHeading";

function PaintingItem({ id, image, title, category, year }) {
	return (
		            <Link className="img" to={`painting/${id}`}>
						<article className="galleri_item">
				            <img src={image.url} 
							     alt={image.alternativeText} 	     
							     onContextMenu={(e) => {
								    e.preventDefault(); 
							}} 
						/>
						<div className="galleri_content">
							<span className="galleri_detail">
							    <SubHeading subcontent={title} />
								<p style={{ textTransform: 'capitalize', }}>
									{category} | {year}
								</p>
							</span>
						</div>
						</article>
		            </Link>
	);
}

PaintingItem.propTypes = {
	id: PropTypes.number.isRequired,
	image: PropTypes.any.isRequired,
	title: PropTypes.string.isRequired,
	category: PropTypes.string.isRequired, 
	year: PropTypes.string.isRequired,
};

export default PaintingItem;
