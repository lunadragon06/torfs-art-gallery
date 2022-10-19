import PropTypes from "prop-types";

export default function Paragraph(props) {
	const { intro } = props;
	return (
            <p>
                {intro}
            </p>
    );
}

Paragraph.propTypes = {
	intro: PropTypes.string.isRequired,
};
