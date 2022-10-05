import Heading from "../../layout/Heading";

export default function Dashboard() {
	return (
		<>
			<Heading content="Dashboard" />
			<nav className="dashboard">
					<p>
						Inbox
					</p>
					<p>
						Enquiries
					</p>
					<p>
						Add new painting
					</p>
					<p>
						Manage paintings
					</p>
			</nav>
		</>
	);
}
