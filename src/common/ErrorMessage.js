import PropTypes from "prop-types";

export default function ErrorMessage({ message }) {
	return <div className="errormsg">{message}</div>;
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
	message: "Failed to upload content! Please try again later.",
};
