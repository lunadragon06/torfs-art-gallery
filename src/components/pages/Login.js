import * as yup from "yup";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { BASE_URL, TOKEN_PATH } from "../../constants/data";
import FormError from "../../common/FormError";
import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username or email."),
	password: yup.string().required("Please enter your correct password."),
});

export default function LoginForm() {
	const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema),
    });

	// eslint-disable-next-line
	const [auth, setAuth] = useContext(AuthContext);

	async function onSubmit(data) {
		setSubmitting(true);
		setLoginError(null);

		console.log(data);

		try {
			const response = await axios.post(url, data);
			console.log("response", response.data);
			setAuth(response.data);
			history("/dashboard");
		} catch (error) {
			console.log("error", error);
			setLoginError(error.toString());
		} finally {
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
						<input name="username" placeholder="Username" {...register("username")} />
						{errors.username && <FormError>{errors.username.message}</FormError>}
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
