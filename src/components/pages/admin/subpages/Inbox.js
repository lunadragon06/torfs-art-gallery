import AuthContext from "../../../../context/AuthContext";
import FormError from "../../../../common/FormError";
import Heading from "../../../layout/typography/Heading";
import { HiArrowLeft } from 'react-icons/hi'; 
import { Link, useHistory } from "react-router-dom";
import Loader from "../../../layout/Loader";
import moment from "moment/moment";
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
			<section style={{ margin: '3rem auto 0', maxWidth: '1000px', }}>
			{contacts.sort( (a,b) => a.id > b.id ? 1 : -1 ).reverse().map((contact) => {
                            return (
                                <article className="inbox-msg" key={contact.id}>
                                    <div className="inbox-detail">
                                        <p>
                                            <b>{contact.first_name} {contact.last_name.substring(0, 1)}.</b> ({contact.email})
                                        </p>
                                        <p>  
                                        {moment(contact.created_at).format("ddd, DD.MM.YYYY.")}
                                            <span className="post-time">
                                                {moment(contact.created_at).format(" (HH:mm)")}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="message-box">
                                        <p>{contact.message}</p>
                                    </div>
                                </article>
                            );
                        })}
			</section>
        </>
	);
}

export default Inbox;
