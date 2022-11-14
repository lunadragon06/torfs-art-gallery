import AuthContext from "../../../../context/AuthContext"; 
import FormError from "../../../../common/FormError";
import Heading from "../../../layout/typography/Heading";
import { HiArrowLeft } from 'react-icons/hi'; 
import { Link, useHistory } from "react-router-dom";
import Loader from "../../../layout/Loader";
import moment from "moment/moment";
import React from 'react';
import useAxios from "../../../../hooks/useAxios";
import { useContext } from 'react';
import { useState, useEffect } from "react";

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
			<div className="breadcrumb" style={{ margin: '0 auto', maxWidth: '1000px', }}>
                <Link to="/dashboard" className="view" style={{ display: 'inline-block', marginBottom: '2.5rem' }}><HiArrowLeft /> Back to dashboard</Link>
		    </div>
			<Heading content="Enquiries" />
			<section style={{ margin: '0 auto', maxWidth: '1000px', }}>
			{enquiries.sort( (a,b) => a.id > b.id ? 1 : -1 ).reverse().map((enquiry) => {
                            return (
                                <article className="post" key={enquiry.id}>
                                    <div className="post-detail">
                                        <p>
                                            <b>{enquiry.name}</b>
                                            <span> (</span>{enquiry.email}<span>)</span>
                                        </p>
                                        <p>{moment(enquiry.created_at).format("dddd DD.MM.YYYY. HH:mm")}</p>
                                    </div>
										<p className="post-subject"><b>Subject:</b> {enquiry.subject}</p>
                                    <div className="note">
                                        <b style={{display: 'inline-block', marginBottom: '.75rem', }}>Note:</b>
                                        <p>{enquiry.note}</p>
                                    </div>
                                </article>
                            );
                        })}
			</section>
		</>
	);
}

export default Enquiries;
