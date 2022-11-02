import { TfiDashboard } from 'react-icons/tfi';
import { TfiEmail } from 'react-icons/tfi';
import { TfiList } from 'react-icons/tfi';
import { TfiPlus } from 'react-icons/tfi';
import { Link } from "react-router-dom";
import Heading from "../../layout/typography/Heading";
import React from 'react';

function AdminMenu() {
    return ( 
        <>
            <Heading content="Dashboard" />
            <nav className="adminav">
                <h2 style={{ fontWeight: 'bold', margin: '-.25rem 2rem .75rem 2rem', }}>Settings</h2>
                <ul className="adminav__inner">
                    <li className="adminav__item">
                        <Link to="/dashboard" className="adminav_link" id="active">
                            <TfiDashboard style={{ margin: '0 .75rem 0', }} /> Dashboard
                        </Link>
                    </li>
                    <li className="adminav__item" id="sublink">
                        <Link to="/inbox" className="adminav_link">
                            <TfiEmail style={{ margin: '0 .75rem 0', }} /> Inbox
                        </Link>
                    </li>
                    <li className="adminav__item" id="sublink">
                        <Link to="/enquiries" className="adminav_link">
                            <TfiList style={{ margin: '0 .75rem 0', }} /> Enquiries
                        </Link>
                    </li>
                    <li className="adminav__item" id="sublink">
                        <Link to="/add" className="adminav_link">
                            <TfiPlus style={{ margin: '0 .75rem 0', }} /> Add painting
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AdminMenu;
