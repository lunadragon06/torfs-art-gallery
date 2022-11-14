import AuthContext from "../../../../context/AuthContext";
import FormError from "../../../../common/FormError";
import Heading from "../../../layout/typography/Heading";
import { HiArrowLeft } from 'react-icons/hi'; 
import { Link, useHistory } from "react-router-dom";
import Loader from "../../../layout/Loader";
import React from 'react';
import useAxios from "../../../../hooks/useAxios";
import { useState, useEffect, useContext } from "react";

function Inbox() {
    const history = useHistory();
    
    const [auth] = useContext(AuthContext);
    console.log(auth);

    if(auth === null) {
        history.push("/");
    }

    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const http = useAxios(); // ... 

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
			<div className="breadcrumb" style={{ margin: '0 auto', maxWidth: '1000px', }}>
                <Link to="/dashboard" className="view" style={{ display: 'inline-block', marginBottom: '2.5rem' }}><HiArrowLeft /> Back to dashboard</Link>
		    </div>
			<Heading content="Inbox" />
			<section>
			{contacts.map((contact) => {
                            return (
                                <article key={contact.id}>
                                        <p>{contact.created_at.slice(0, -5)}</p>
                                        <p>{contact.first_name}</p>
                                        <p>{contact.email}</p>
                                        <p>{contact.message}</p>
                                </article>
                            );
                        })}
			</section>
        </>
	);
}

export default Inbox;
