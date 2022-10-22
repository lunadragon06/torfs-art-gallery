import SubHeading from "../layout/SubHeading";

export default function EnquiryForm() {
    return (
        <>
        <form className="enquiry">
            <SubHeading subcontent="Send me your request here:" /> 
            <label htmlFor="fname">
                Name <span className="reqdot">*</span>
            </label>
                <input type="text" name="fname" />
            <label htmlFor="mail">
                Email <span className="reqdot">*</span>
            </label>
                <input type="email" name="mail" />
            <label htmlFor="subject">
                What can I do for you? <span className="reqdot">*</span>
            </label>
            <select>
                <option value="">Select assignment type</option>
                <option className="subject-option" value="1">1</option>
            </select>
            <label htmlFor="note">
				Note <span className="reqdot">*</span>
			</label>
			    <textarea id="note" name="note" required></textarea>
            <button className="sendbtn" type="submit">
                Send 
            </button>
        </form>
        </>
    );
}
