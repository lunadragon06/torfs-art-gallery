//import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";
/*
import {  NavLink, useNavigate  } from "react-router-dom";
import { useContext } from "react";
*/

function Nav() {
    /* 
    const [auth, setAuth] = useContext(AuthContext);

	const history = useNavigate();

	function logout() {
		setAuth(null);
		history("/");
	}

    const onLinkClick = () => {
        document.querySelector("#nav").checked = false; 
    };
  
    document
        .querySelectorAll("a")
        .forEach((element) => element.addEventListener("click", onLinkClick));
    */

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
                {/* {auth ? (
				<> */}
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                {/* <li onClick={logout} className="logbtn">
                        <Link to="/" onClick="onLinkClick()">Logout</Link>
                </li> 
                </>
                ) : (
                */}
                <li className="logbtn">
                    <Link to="/login">Login</Link>
                </li>
                {/* )} */}
            </ul>
		</nav>
	);
}

export default Nav;
