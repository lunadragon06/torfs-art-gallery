import * as yup from "yup";
import FormError from "../../../../common/FormError"; 
import Heading from "../../../layout/Heading";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";


const schema = yup.object().shape({
    title: yup.string().required("A title for your painting is required."),
	category: yup.string().required("Please select a painting category."),
    image: yup.mixed().required("Please upload your painting image."),
	description: yup.string().required("Description for your painting is required."),
});

export default function Add() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm ({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
        alert("A new painting has been successfully added to your page!");
        reset();
    }

    console.log(errors);

	return (
	<>
		<div className="breadcrumb">
			<Link to="/dashboard">
				Dashboard
			</Link>
			<span className="current-link"> / <b> Add painting</b></span>
		</div>
		<Heading content="Add new painting" />
		<form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">
				Title <span className="reqdot">*</span>
			</label>
                <input name="title" {...register("title")} />
				{errors.title && <FormError>
                    {errors.title.message}
				</FormError>}
			<label htmlFor="cat">
				Category <span className="reqdot">*</span>
			</label>
				<select {...register("category")}>
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
				<input className="file-input" type="file" {...register} />
				{errors.image && <FormError>
                    {errors.image.message}
				</FormError>}
			<label htmlFor="description">
				Description <span className="reqdot">*</span>
			</label>
			    <textarea name="description" {...register("description")} />
				{errors.description && <FormError>
                    {errors.description.message}
				</FormError>}
            <button className="addbtn" type="submit">Add painting</button>
        </form>
	</>
	);
}
