import AuthContext from "../../../../context/AuthContext";
import FormError from "../../../../common/FormError";
import Heading from "../../../layout/Heading";
import { Link } from "react-router-dom";
import Loader from "../../../layout/Loader";
import React from 'react';
import useAxios from "../../../../hooks/useAxios";
import { useState, useEffect, useContext } from "react";

function Inbox() {
	const [auth] = useContext(AuthContext);
	console.log(auth);
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(function () {
        async function showContact() {
            try {
                const response = await http.get("/contacts");
                setContacts(response.data);

            } catch (error) {
                console.log("error", error);
                setError(error.toString());

            } finally {
                setLoading(false);
            }
        }
        showContact();
    }, [http]);

	if (loading) {
		return <Loader />;
	}

    if (error) return <FormError>
	                        {"Unable to upload messages at the moment."}
                      </FormError>;

	return (
		<>
			<div className="breadcrumb">
			<Link to="/dashboard">
				Dashboard
			</Link>
			<span className="current-link"> / <b> Inbox</b></span>
		    </div>
			<Heading content="Inbox" />
			<section>
			{contacts.map((contact) => {
                            return (
                                <div key={contact.id}>
                                        <p>{contact.created_at.slice(0, -5)}</p>
                                        <p>{contact.first_name}</p>
                                        <p>{contact.email}</p>
                                        <p>{contact.message}</p>
                                </div>
                            );
                        })}
			</section>
        </>
	);
}

export default Inbox;
