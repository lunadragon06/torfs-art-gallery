import Heading from "../../../layout/Heading";
import { Link } from "react-router-dom";

function Inbox() {
	
	return (
		<>
			<div className="breadcrumb">
			<Link to="/dashboard">
				Dashboard
			</Link>
			<span className="current-link"> / <b> Inbox</b></span>
		    </div>
			<Heading content="Inbox" />

        </>
	);
}

export default Inbox;
