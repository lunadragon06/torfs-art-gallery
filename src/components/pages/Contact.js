import * as yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../constants/data";
import FormError from "../../common/FormError";
import Heading from "../layout/Heading";
import React, { useState } from 'react';
import SentForm from "../../common/SentForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const url = BASE_URL + "/inbox";

const schema = yup.object().shape({
    name: yup.string()
            .required("You must enter your name."),
    email: yup.string()
            .email("The email is not valid.")
            .required("Please enter your email."),
    message: yup.string()
            .required("Please enter your message here.")
            .min(15, "Your message must contain at least 15 characters long."),
});

function Contact() {
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formSentMessage, setFormSentMessage] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

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
                message:""
            });
        } catch (error) {
            console.log("error", error);
            setSubmitError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }

	return (
		<>
			<Heading content="Contact" />
            {submitError && <FormError>{submitError}</FormError>}
            {formSentMessage && <SentForm></SentForm>}
			<form onSubmit={handleSubmit(onSubmit)}>
				<section className="rowform">
				<div>
			        <label className="label" htmlFor="fname">
					    Name <span className="reqdot">*</span>
				    </label>
                    <input className="input" 
                           type="text" 
                           name="first_name"
                           {...register("name")} />
                    {errors.name && <FormError>{errors.name.message}</FormError>}
				</div>
				<div>
			        <label className="label" htmlFor="email">
					    Email <span className="reqdot">*</span>
				    </label>
                    <input className="input" 
                           type="email" 
                           name="user_email" 
                           {...register("email")} />
                    {errors.email && <FormError>{errors.email.message}</FormError>}
				</div>
				</section>
			    <label htmlFor="message">
					Message <span className="reqdot">*</span>
				</label>
			        <textarea id="msg" 
                              name="message" 
                              {...register("message")}>
                    </textarea>
                    {errors.message && <FormError>{errors.message.message}</FormError>}
				<button type="submit" 
                        className="sendbtn">
                            {submitting ? "Sending..." : "SEND"}
                </button>
            </form>
		</>
	);
}

export default Contact;
