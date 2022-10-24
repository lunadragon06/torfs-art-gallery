import AuthContext from "../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";


function Nav() {
    const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history("/");
	}

	return (
		<nav>
            <a className="wordmark" href="/">
                Torf's Gallery of Art
            </a>
            <ul>
                <li>
			        <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                {auth ? (
				<>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                        <button onClick={logout}>Logout</button>
                </li> 
                </>
                ) : (
                <li className="logbtn">
                    <Link to="/login">Login</Link>
                </li>
                )}
            </ul>
		</nav>
	);
}

export default Nav;
