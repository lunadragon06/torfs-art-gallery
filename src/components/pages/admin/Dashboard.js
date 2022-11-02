import { Link } from "react-router-dom";
import Heading from "../../layout/typography/Heading";
import React from 'react';

function AdminMenu() {
    return ( 
        <>
            <Heading content="Dashboard" />
            <nav className="adminav">
                <ul className="adminav__inner">
                    <li className="adminav__item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="adminav__item">
                        <Link to="/inbox">Inbox</Link>
                    </li>
                    <li className="adminav__item">
                        <Link to="/enquiries">Enquiries</Link>
                    </li>
                    <li className="adminav__item">
                        <Link to="/add">Add painting</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AdminMenu;
