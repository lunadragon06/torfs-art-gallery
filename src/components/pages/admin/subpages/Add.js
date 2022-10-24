/* 
import * as yup from "yup";
import FormError from "../../components/common/FormError"; 
*/
import Heading from "../../../layout/Heading";
import { Link } from "react-router-dom";
/*
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAxios from "../../components/hooks/useAxios";
import { yupResolver } from "@hookform/resolvers/yup";
*/

/* 
const schema = yup.object().shape({
    title: yup.string().required("A title name for your painting is required"),
    description: yup.string().required("Description for your painting is required"),
    files: yup.mixed()
});
*/

export default function Add() {
	/* 
	const [submitting, setSubmitting] = useState(false);
    const [serverError, setServerError] = useState(null);

    const history = useNavigate();;
    const http = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    async function onSubmit(inputData) {
        setSubmitting(true);
        setServerError(null);

		inputData.status = "publish";

		const formData = new FormData();
        for (const image of inputData.files) {
            formData.append('files.images', image);
        }

		const { image, ...data } = inputData;
        formData.append("data", JSON.stringify(data));
        try {
			const response = await http.post("/products", formData)
			    history("/dashboard");
        } catch (error) {
            console.log("error", error);
            setServerError(error.toString());
        } finally {
            setSubmitting(false);
        }
    }
	*/
	return (
		<>
		<div className="breadcrumb">
			<Link to="/dashboard">
				Dashboard
			</Link>
			<span className="current-link"> / <b> Add painting</b></span>
		</div>
		<Heading content="Add new painting" />
			<form>
                <label htmlFor="title">
					Title <span className="reqdot">*</span>
				</label>
                    <input type="text" name="title" required />
				<label htmlFor="cat">
					Category <span className="reqdot">*</span>
				</label>
                    <input type="text" name="cat" required />
				<label htmlFor="tec">
					Technique <span className="reqdot">*</span>
				</label>
                    <input type="text" name="tec" required />
				<label htmlFor="no">
					Painting number <span className="reqdot">*</span>
				</label>
                    <input type="number" name="no" required/>
				<label htmlFor="year">
					Year and month <span className="reqdot">*</span>
				</label>
                    <input type="month" id="start" name="start" min="2019-01" />
				<label htmlFor="img">
					Image <span className="reqdot">*</span>
				</label>
				    <input type="file" name="img" id="img" className="file-input" required />
				<label htmlFor="description">
					Description <span className="reqdot">*</span>
				</label>
			        <textarea id="desc" name="desc"></textarea>
                <button className="addbtn" type="submit">Add painting</button>
            </form>
		</>
	);
}
