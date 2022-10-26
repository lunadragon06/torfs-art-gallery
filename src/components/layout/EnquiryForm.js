import * as yup from "yup";
import FormError from "../../common/FormError";
import React from "react";
import SentForm from "../../common/SentForm";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string()
            .required("You must enter your name."),
    mail: yup.string()
            .email("The email adress is not valid.")
            .required("Please enter your email adress."),
    phone: yup.string().matches(/^(|.{8,})$/, "The phone number must be at least 8 characters."), 
    subject: yup.string()
            .required("Please enter your request subject.")
            .min(12, "The subject must contain at least 12 characters."),
    note: yup.string()
            .required("Please spesify your request details."),
});

function EnquiryForm() {
    const [submitting, setSubmitting] = useState(false);
    const [formSentMessage, setFormSentMessage] = useState(false);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
        setSubmitting(true);
        setFormSentMessage(true);
        reset();
    }

    console.log(errors);

    return (
    <>
        <form className="enquiry" onSubmit={handleSubmit(onSubmit)}>
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
                       name="mail" 
                       placeholder="name@email.com" {...register("mail")} />
                {errors.mail && 
                    <FormError>
                        {errors.mail.message}
                    </FormError>
                }
            <label htmlFor="tlf">
                Phone number <span className="optxt">(optional)</span>
            </label>
                <input type="tlf" 
                       name="tlf" 
                       placeholder="+47 987 65 432 or 98765432" {...register("phone")} />
                {errors.phone && 
                    <FormError>
                        {errors.phone.message}
                    </FormError>
                }
            <label htmlFor="subject">
                What can I do for you? <span className="reqdot">*</span> 
            </label>
            <input type="subject" 
                   name="subject" 
                   placeholder="Write down your request title or subject" {...register("subject")} />
            {errors.subject && 
                <FormError>
                    {errors.subject.message}
                </FormError>
            }
            <label htmlFor="note">
				Note <span className="reqdot">*</span>
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
