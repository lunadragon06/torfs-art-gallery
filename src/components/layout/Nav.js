import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<Link to="/">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
		</nav>
	);
}

export default Nav;
