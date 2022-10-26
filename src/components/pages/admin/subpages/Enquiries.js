import Heading from "../../../layout/Heading";
import { Link } from "react-router-dom";

export default function Enquiries() {
	return (
		<>
			<div className="breadcrumb">
			    <Link to="/dashboard">
				    Dashboard
			    </Link>
			    <span className="current-link"> / <b> Enquiries</b></span>
		    </div>
			<Heading content="Enquiries" />
			
		</>
	);
}
