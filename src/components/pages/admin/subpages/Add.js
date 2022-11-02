import * as yup from "yup";
import FormError from "../../../../common/FormError"; 
import Heading from "../../../layout/typography/Heading";
import { Link, useHistory } from "react-router-dom";
import React from "react";
import useAxios from "../../../../hooks/useAxios";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    title: yup.string().required("A title for your painting is required."),
	category: yup.string().required("Please select a painting category."),
    file: yup.mixed().required("Please upload your painting image."),
	description: yup.string().required("Description for your painting is required."),
});

function Add() {
	const [submitting, setSubmitting] = useState(false);
    const [serverError, setServerError] = useState(null);

    const history = useHistory();;
    const http = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    async function onSubmit(inputData) {
        setSubmitting(true);
        setServerError(null);

        inputData.status = "published";

        //Images
        const formData = new FormData();
        for (const image of inputData.file) {
            formData.append('file.images', image);
        }

        const { image, ...data } = inputData;
        formData.append("data", JSON.stringify(data));

        try {
            const response = await http.post("/products", formData);
			console.log(response);
            history("/dashboard");

        } catch (error) {
            setServerError("Failed to add new painting! Please try again later.");
			console.log("error", error);
        } finally {
            setSubmitting(false);
        }
    }

	return (
	<section className="add" style={{ margin: '0 auto', maxWidth: '1000px', }}>
		<Heading content="Add new painting" />
		<form onSubmit={handleSubmit(onSubmit)}>
		{serverError && <FormError>{serverError}</FormError>}
		<div className="breadcrumb" style={{ marginBottom: '4rem', }}>
			<Link to="/dashboard">
				Dashboard
			</Link>
			<span className="current-link"> / <b> Add painting</b></span>
		</div>
            <label htmlFor="title">
				Title <span className="reqdot">*</span>
			</label>
                <input name="title" type="title" {...register("title")} />
				{errors.title && <FormError>
                    {errors.title.message}
				</FormError>}
			<label htmlFor="cat">
				Category <span className="reqdot">*</span>
			</label>
				<select name="category" type="category" {...register("category")}>
                    <option value="">Please select a painting category</option>
                    <option className="subject-option" value="abstract">Abstract</option>
					<option className="subject-option" value="maritime">Maritime</option>
					<option className="subject-option" value="nature">Nature</option>
                </select>
				{errors.category && <FormError>
                    {errors.category.message}
				</FormError>}
			<label htmlFor="img">
				Image <span className="reqdot">*</span>
			</label>
				<input className="file-input" name="file" type="file" multiple {...register("file")} />
				{errors.file && <FormError>
                    {errors.file.message}
				</FormError>}
			<label htmlFor="description">
				Description <span className="reqdot">*</span>
			</label>
			    <textarea type="description" name="description" {...register("description")} />
				{errors.description && <FormError>
                    {errors.description.message}
				</FormError>}
            <button className="addbtn" type="submit" name="add">
			    {submitting ? "Adding..." : "Add"}
			</button>
        </form>
	</section>
	);
}

export default Add;
