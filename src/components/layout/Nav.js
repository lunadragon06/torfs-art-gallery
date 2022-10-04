import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
            <a className="wordmark" href="/">
                Torf's Gallery of Art
            </a>
            <ul>
			    <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
            </ul>
		</nav>
	);
}

export default Nav;
