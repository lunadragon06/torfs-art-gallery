import Heading from "../layout/Heading";

export default function Login() {
	return (
		<>
			<Heading content="Login" />
			<form>
                <label htmlFor="uname">Username/email</label>
                    <input type="text" name="uname" required />
                <label htmlFor="psw">Password</label>
                    <input type="password" name="psw" required />
                <button className="loginbtn" type="submit">Login</button>
            </form>
		</>
	);
}
