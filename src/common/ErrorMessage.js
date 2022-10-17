import { FaSadTear } from 'react-icons/fa';
import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
	return <div className="errormsg">
		{message} <FaSadTear />
	</div>;
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
	message: "Failed to upload content! Please try again later.",
};
