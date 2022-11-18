import * as yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../../constants/data";
import FormError from "../../../common/FormError";
import { Link } from "react-router-dom";
import React from "react";
import SentForm from "../../../common/SentForm";
import { RiCloseFill } from 'react-icons/ri';
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const url = BASE_URL + "/requests";

const schema = yup.object().shape({
    name: yup.string()
            .required("You must enter your name."),
    email: yup.string()
            .email("The email adress is not valid.")
            .required("Email adress is required."),
    subject: yup.string()
            .required("Please enter your subject title.")
            .matches(/^[aA-zZ\s]+$/, "Only letters are allowed."),
    note: yup.string()
            .required("Request details are required.")
            .max(300, "Text can't be over 300 characters."),
});

function EnquiryForm() {
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formSentMessage, setFormSentMessage] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // notefield word count
    let [count, getCount] = useState(0);

    const keyhandler = e => {
      getCount(e.target.value.length);
    };

    async function onSubmit(data) {
        setSubmitting(true);
        setSubmitError(null);

        try {
            const response = await axios.post(url, data);
            console.log(response); 
            setFormSentMessage(true);

            reset({
                name: "",
                email: "",
                subject: "",
                note: ""
            });
        } catch (error) {
            console.log("error", error);
            setSubmitError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

     // eslint-disable-next-line
    console.log(errors);

    return (
    <section className="request">
    <h3 style={{ fontSize: '20px', lineHeight: '1.75rem', textAlign: 'center', }}>
        Get in touch for collaborations and assignments?
    </h3>
        {/* TO OPEN THE ENQUIRY FORM */}  
        <a href="#popUp" id="openPopUp">Make a request</a>
        <aside id="popUp" className="popup">
          <div className="popUpContainer">
            <form className="enquiry" onSubmit={handleSubmit(onSubmit)}>
            {/* #! in order to get back to the same position as where the inquiry was after closing the form */} 
            <a href="#!" className="closePopUp">
                <RiCloseFill />
            </a>
        {submitError && <FormError>{submitError}</FormError>}
        {formSentMessage && <SentForm></SentForm>}
            <label htmlFor="name">
                Name <span className="reqdot">*</span>
            </label>
                <input type="text" 
                       name="name" 
                       placeholder="Ola Nordmann" {...register("name")} />
                {errors.name && 
                    <FormError>
                        {errors.name.message}
                    </FormError>
                }
            <label htmlFor="email">
                Email <span className="reqdot">*</span>
            </label>
                <input type="email" 
                       name="email" 
                       placeholder="name@email.com" {...register("email")} />
                {errors.email && 
                    <FormError>
                        {errors.email.message}
                    </FormError>
                }
            <label htmlFor="subject">
                What can I do for you? <span className="reqdot">*</span> 
            </label>
            <input type="text" 
                   name="subject" 
                   placeholder="e.g. commission requests" {...register("subject")} />
                {errors.subject && 
                    <FormError>
                        {errors.subject.message}
                    </FormError>
                }
            <label htmlFor="note">
				Note <span className="reqdot">*</span><span className="optxt"> (Can be max 300 characters long)</span>
			</label>
			    <textarea type="note" 
                          name="note"
                          className="notetab" 
                          id="note"
                          onKeyUp={e => keyhandler(e)}
                          placeholder="Please spesify your request in more details." {...register("note")}>
                </textarea>
                {errors.note && 
                    <FormError>
                        {errors.note.message}
                    </FormError>
                }
                <p className="counter" id="counter">{count} / 300</p>
            <button className="sendbtn" id="enquirybtn" type="submit">
                {submitting ? "Sending..." : "SEND"} 
            </button>
        </form>
          </div>    
          {/* REMOVE THE WARNINGS FROM THE TERMINAL */}    
          <Link to="#!" className="closePopUpOutSide" />    
        </aside>
    </section>
    );
}

export default EnquiryForm;
