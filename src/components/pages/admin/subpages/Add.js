import * as yup from "yup";
import FormError from "../../../../common/form/FormError"; 
import Heading from "../../../layout/typography/Heading";
import { HiArrowLeft } from 'react-icons/hi'; 
import { Link, useHistory } from "react-router-dom";
import React from "react";
import useAxios from "../../../../hooks/useAxios";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    title: yup.string().required("A title for your painting is required."),
	category: yup.string().required("Please select a painting category."),
	year: yup.string().required("Publish year is required.")
	.length(4, "Must have a year format.").min(2019, "Publish year can't go below 2019."), 
	month: yup.number().typeError("Enter month in number value.")
	.moreThan(0, "Invalid month number.")
	.lessThan(13, "Can't be over 12."),
	description: yup.string().required("Description for your painting is required."),
	files: yup.mixed().required()
	        .test("image", "You need to provide a file.", (va) => {
		        if (va.length > 0) {
		            return true;
		        }
		        return false;
	        })
	        .test("fileSize", "The image is too large (maximum file size: 200KB).", (value) => {
				if (!value.length) {
					return true;
				}
		        return value[0].size <= 204800; // converted from KB to Bytes 
	        }).test("type", "Only the following formats are accepted: .jpeg and .jpg", (val) => {
			    if (!val.length) return true;
			    return val && (
				    val[0].type === "image/jpeg" ||
				    val[0].type === "image/jpg" 
			);
		}),
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
        for (const image of inputData.files) {
            formData.append('files.image', image);
        }

        const { image, ...data } = inputData;
        formData.append("data", JSON.stringify(data));
		// formData.append("files.image", image[0]); <-- not working

        try {
            const response = await http.post("/paintings", formData);
			console.log(response);
            history.push("/dashboard");

        } catch (error) {
            setServerError("Failed to add new painting! Please try again later.");
			console.log("error", error);
        } finally {
            setSubmitting(false);
        }
    }

	return (
	<section className="add" style={{ margin: '0 auto', maxWidth: '500px', }}>
		<Link to="/dashboard" className="view" style={{ display: 'inline-block', marginBottom: '2.5rem' }}><HiArrowLeft /> Back to dashboard</Link>
		<Heading content="Add new painting" />
		<form onSubmit={handleSubmit(onSubmit)}>
		{serverError && <FormError>{serverError}</FormError>}
            <label htmlFor="title">
				Title <span className="reqdot">*</span>
			</label>
                <input name="title" type="title" {...register("title")} />
				{errors.title && <FormError>
                    {errors.title.message}
				</FormError>}

				<section className="rowform" style={{ gap: '2rem', }}>
				<div>
			        <label className="label" htmlFor="year">
					    Year 
				    </label>
                    <input className="input" 
                           id="year"
                           type="text" 
                           name="year"
                           {...register("year")} />
                    {errors.year && <FormError>{errors.year.message}</FormError>}
				</div>
				<div>
			        <label className="label" htmlFor="month">
					    Month 
				    </label>
                    <input className="input" 
                           id="month"
                           type="text" 
                           name="month"
                           {...register("month")} />
                    {errors.month && <FormError>{errors.month.message}</FormError>}
				</div>
				</section>

			<label htmlFor="cat">
				Category <span className="reqdot">*</span>
			</label>
				<select name="category" type="category" {...register("category")}>
                    <option value="">Select painting category</option>
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
				<input className="file-input" 
				       name="file" 
					   type="file" 
					   multiple {...register("files")} 
				/>
				{errors.files && <FormError>
                    {errors.files.message}
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
