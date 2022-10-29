import AuthContext from "../../context/AuthContext";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
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
		    <nav className="main-nav">
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="menu-btn">
                <HiOutlineMenuAlt4 size={40} color='aliceblue' />
            </label>
            <a className="logo" href="/">
                Torf's Gallery of Art
            </a>
                <ul className="navlinks">
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
