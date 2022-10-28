import * as yup from "yup";
import axios from "axios";
import { BASE_URL } from "../../constants/data";
import FormError from "../../common/FormError";
import React from "react";
import SentForm from "../../common/SentForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const url = BASE_URL + "/enquiries";

const schema = yup.object().shape({
    name: yup.string()
            .required("You must enter your name."),
    email: yup.string()
            .email("The email adress is not valid.")
            .required("Please enter your email adress."),
    phone: yup.string().typeError("This field must contain only numbers.")
            .matches(/^(|.{8,})$/, "The phone number must contain at least 8 characters only containing numbers."), 
    subject: yup.string()
            .required("Please enter your request subject."),
    note: yup.string(),
});

function EnquiryForm() {
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [formSentMessage, setFormSentMessage] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    async function onSubmit(data) {
        setSubmitting(true);
        setFormSentMessage(true);

        try {
            const response = await axios.post(url, data);
            console.log(response); 
            setFormSentMessage(true);

            reset({
                name: "",
                email: "",
                phone: "",
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

    console.log(errors);

    return (
    <>
        <form className="enquiry" onSubmit={handleSubmit(onSubmit)}>
        {formSentMessage && <FormError>{submitError}</FormError>}
        {formSentMessage && <SentForm></SentForm>}
            <label htmlFor="fname">
                Name <span className="reqdot">*</span>
            </label>
                <input type="text" 
                       name="fname" 
                       placeholder="Ola Nordmann" {...register("name")} />
                {errors.name && 
                    <FormError>
                        {errors.name.message}
                    </FormError>
                }
            <label htmlFor="mail">
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
            <label htmlFor="tlf">
                Phone number <span className="optxt">(optional)</span>
            </label>
                <input type="tlf" 
                       name="tlf" 
                       placeholder="e.g. 98765432" {...register("phone")} />
                {errors.phone && 
                    <FormError>
                        {errors.phone.message}
                    </FormError>
                }
            <label htmlFor="subject">
                What can I do for you? <span className="reqdot">*</span> 
            </label>
            <select type="subject" 
                   name="subject" 
                   placeholder="Write down your request title or subject" {...register("subject")}>
                    <option value="">Select your subject request type</option>
                    <option className="subject-option" value="one">one</option>
                    <option className="subject-option" value="two">two</option>
                    <option className="subject-option" value="three">three</option>
                    <option className="subject-option" value="four">four</option>
            </select>
            {errors.subject && 
                <FormError>
                    {errors.subject.message}
                </FormError>
            }
            <label htmlFor="note">
				Note
			</label>
			    <textarea type="note" 
                          name="note" 
                          placeholder="Please spesify your request in more details here." {...register("note")}>
                </textarea>
                {errors.note && 
                    <FormError>
                        {errors.note.message}
                    </FormError>
                }
            <button className="sendbtn" type="submit">
                {submitting ? "Sending..." : "SEND"} 
            </button>
        </form>
    </>
    );
}

export default EnquiryForm;
