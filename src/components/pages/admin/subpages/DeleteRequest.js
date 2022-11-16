import PropTypes from "prop-types";
import useAxios from "../../../../hooks/useAxios";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function DeleteRequest({ id }) {
	const [error, setError] = useState(null);

	const http = useAxios();
	const history = useHistory();

	const url = `/requests/${id}`;

	async function handleDelete() {
        const confirmDelete = window.confirm("Delete this request?");

        if (confirmDelete) {
		try {
			await http.delete(url);
			history.push("/dashboard");
		} catch (error) {
			setError(error);
		}
	  }
    }

	return (
		<button type="button" className="delbtn" onClick={handleDelete}>
			{error ? "Error" : "Delete"}
		</button>
	);
}

DeleteRequest.propTypes = {
	id: PropTypes.number.isRequired,
};
