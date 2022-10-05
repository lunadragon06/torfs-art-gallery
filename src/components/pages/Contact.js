import Heading from "../layout/Heading";

export default function Contact() {
	return (
		<>
			<Heading content="Contact" />
			<form>
			    <label className="label" htmlFor="fname">
					Name <span className="reqdot">*</span>
				</label>
                    <input className="input" type="text" name="fname" required />
			    <label className="label" htmlFor="email">
					Email <span className="reqdot">*</span>
				</label>
                    <input className="input" type="email" name="email" required />
			    <label htmlFor="message">
					Message <span className="reqdot">*</span>
				</label>
			        <textarea id="msg" name="msg"></textarea>
                <button className="sendbtn" type="submit">Send</button>
            </form>
		</>
	);
}
