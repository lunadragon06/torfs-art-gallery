import FormError from "../../../../common/FormError";
import Heading from "../../../layout/typography/Heading";
import { Link } from "react-router-dom";
import Loader from "../../../layout/Loader";
import React from 'react';
import useAxios from "../../../../hooks/useAxios";
import { useState, useEffect } from "react";

import AuthContext from "../../../../context/AuthContext"; 
import { useHistory } from "react-router-dom";
import { useContext } from 'react';

function Enquiries() {
    const history = useHistory();
    
    const [auth] = useContext(AuthContext);
    console.log(auth);

    if(auth === null) {
        history.push("/");
    }

	const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const http = useAxios();

    useEffect(function () {
        async function showEnquiries() {
            try {
                const response = await http.get("/requests");
                setEnquiries(response.data);

            } catch (error) {
                console.log("error", error);
                setError(error.toString());
                
            } finally {
                setLoading(false);
            }
        }
        showEnquiries();
    }, [http]);
	
    if (loading) {
		return <Loader />;
	}

    if (error) return <FormError>
		                {"Unable to upload enquiry requests at the moment."}
		              </FormError>;

	return (
		<>
			<div className="breadcrumb">
			    <Link to="/dashboard">
				    Dashboard
			    </Link>
			    <span className="current-link"> / <b> Enquiries</b></span>
		    </div>
			<Heading content="Enquiries" />
			<section>
			{enquiries.map((enquiry) => {
                            return (
                                <div key={enquiry.id}>
                                        <p>{enquiry.created_at.slice(0, -5)}</p>
                                        <p>{enquiry.name}</p>
                                        <p>{enquiry.mail}</p>
										<p>{enquiry.subject}</p>
                                        <p>{enquiry.note}</p>
                                </div>
                            );
                        })}
			</section>
		</>
	);
}

export default Enquiries;
