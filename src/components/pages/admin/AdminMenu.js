import { Link } from "react-router-dom";

function AdminMenu() {
    return ( 
        <>
            <nav className="admin_nav">
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/add">Add new painting</Link>
                </li>
            </nav>
        </>
    )
}

export default AdminMenu;