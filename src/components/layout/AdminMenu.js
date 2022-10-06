import { Link } from "react-router-dom";

function AdminMenu() {
	return (
        <nav className="dashboard">
            <ul>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/add">Add new painting</Link>
            </ul>
        </nav>
	);
}

export default AdminMenu;
