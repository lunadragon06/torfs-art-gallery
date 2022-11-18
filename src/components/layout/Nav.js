import AuthContext from "../../context/AuthContext";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";


function Nav() {
    const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function logout() {
		setAuth(null);
		history.push("/login");
	}

	return (
		    <nav className="main-nav">
            <input type="checkbox" id="check" />
            <label id="close-button" htmlFor="check" className="menu-btn">
                <HiOutlineMenuAlt4 size={40} color='aliceblue' />
            </label>
            <a className="logo" href="/">
                Torf's Gallery of Art
            </a>
                <ul className="navlinks">
                    <li>
                        <Link onClick={() => {document.getElementById("close-button").click()}} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={() => {document.getElementById("close-button").click()}} to="/gallery">Gallery</Link>
                    </li>
                    <li>
                        <Link onClick={() => {document.getElementById("close-button").click()}} to="/about">About</Link>
                    </li>
                    <li>
                        <Link onClick={() => {document.getElementById("close-button").click()}} to="/contact">Contact</Link>
                    </li>
                    {auth ? (
				    <>
                    <li>
                        <Link onClick={() => {document.getElementById("close-button").click()}} to="/dashboard">Dashboard</Link>
                    </li>
                    <li onClick={() => {document.getElementById("close-button").click()}}>
                        <Link to="/login" className="logbtn" onClick={logout}>Logout</Link>
                    </li> 
                    </>
                    ) : (
                    <li>
                        <Link className="logbtn" onClick={() => {document.getElementById("close-button").click()}} to="/login">Login</Link>
                    </li>
                    )}
                </ul>
		    </nav>
	);
}

export default Nav;
