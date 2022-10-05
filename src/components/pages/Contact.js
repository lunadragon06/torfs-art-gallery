import Heading from "../layout/Heading";

export default function Contact() {
	return (
		<>
			<Heading content="Contact" />
			<form>
				<section className="rowform">
				<div>
			        <label className="label" htmlFor="fname">
					    Name <span className="reqdot">*</span>
				    </label>
                    <input className="input" type="text" name="fname" required />
				</div>
				<div>
			        <label className="label" htmlFor="email">
					    Email <span className="reqdot">*</span>
				    </label>
                    <input className="input" type="email" name="email" required />
				</div>
				</section>
			    <label htmlFor="message">
					Message <span className="reqdot">*</span>
				</label>
			        <textarea id="msg" name="msg"></textarea>
                <button className="sendbtn" type="submit">Send</button>
            </form>
		</>
	);
}
