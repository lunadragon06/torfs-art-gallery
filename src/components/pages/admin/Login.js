import * as yup from "yup";
import axios from "axios";
import AuthContext from "../../../context/AuthContext";
import { BASE_URL, TOKEN_PATH } from "../../../constants/data";
import FormError from "../../common/form/FormError";
import Heading from "../../layout/typography/Heading";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	identifier: yup.string().required("Please enter your username or email."),
	password: yup.string().required("Please enter your correct password."),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema),
    });

	const [auth, setAuth] = useContext(AuthContext);
	console.log(auth);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);
		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			history.push("/dashboard");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
			console.log(setSubmitting)
			setSubmitting(false);
		}
	}

	return (
		<>
        	<Heading content="Login" />
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <FormError>{loginError}</FormError>}
				<fieldset className="form-container" disabled={submitting}>
					<div>
					    <label>Username or Email</label>
						<input name="identifier" placeholder="Username" {...register("identifier")} />
						{errors.identifier && <FormError>{errors.identifier.message}</FormError>}
					</div>
					<div>
					    <label>Password</label>
						<input name="password" placeholder="Password" {...register("password")} type="password" />
						{errors.password && <FormError>{errors.password.message}</FormError>}
					</div>
					<div className="button-wrapper">
					<button className="register">{submitting ? "Loggin in ..." : "Login"}</button>
					</div>
				</fieldset>
			</form>
		</>
	);
}
