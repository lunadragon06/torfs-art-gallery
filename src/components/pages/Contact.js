//import emailjs from "emailjs-com"; 
import Heading from "../layout/Heading";

export default function Contact() {
	/* 
	function SendEmail(e) {
		e.preventDefault();

		emailjs.sendForm(); 
	}
	*/
	return (
		<>
			<Heading content="Contact" />
			<form>
				<section className="rowform">
				<div>
			        <label className="label" htmlFor="fname">
					    Name <span className="reqdot">*</span>
				    </label>
                    <input className="input" type="text" name="first_name" required />
				</div>
				<div>
			        <label className="label" htmlFor="email">
					    Email <span className="reqdot">*</span>
				    </label>
                    <input className="input" type="email" name="user_email" required />
				</div>
				</section>
			    <label htmlFor="message">
					Message <span className="reqdot">*</span>
				</label>
			        <textarea id="msg" name="message" required></textarea>
				<input type="submit" value="Send" className="sendbtn" />
            </form>
		</>
	);
}
