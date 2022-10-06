import Heading from "../../layout/Heading";

export default function Dashboard() {
	return (
		<>
			<Heading content="Dashboard" />
			<button className="logoutbtn" type="submit">Logout</button>
		</>
	);
}
