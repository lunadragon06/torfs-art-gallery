import emailjs from "emailjs-com"; 
import Heading from "../layout/Heading";

export default function Contact() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm(
			"service_k7mcnpl", 
		    "template_yjqrb65",
			e.target, 
			"jiyj71ORX3nS0yNsf"
		).then(res=> {
			alert("Your message has been sent!");
			console.log(res);
		}).catch(err=> console.log(err));  
	}

	return (
		<>
			<Heading content="Contact" />
			<form onSubmit={sendEmail}>
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
