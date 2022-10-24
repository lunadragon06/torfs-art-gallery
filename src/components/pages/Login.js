/* import axios from "axios";
import AuthContext from "../../context/authContext";
import { BASE_URL, TOKEN_PATH } from "../../constants/data";
import FormError from "../../common/FormError"; */
import Heading from "../layout/Heading";
/* import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const url = BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
}); */

export default function Login() {
    /* 
    const [submitting, setSubmitting] = useState(false);
	const [loginError, setLoginError] = useState(null);

	const history = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm ({
        resolver: yupResolver(schema),
    });

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
    */

	return (
		<>
			<Heading content="Login" />
			<form>
            <fieldset>
                <label htmlFor="uname">Username/email</label>
                    <input type="text" name="uname" required />
                <label htmlFor="psw">Password</label>
                    <input type="password" name="psw" required />
                <button className="loginbtn" type="submit">Login</button>
            </fieldset>
            </form>
		</>
	);
}
