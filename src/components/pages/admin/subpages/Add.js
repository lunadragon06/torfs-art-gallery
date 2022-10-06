import Heading from "../../../layout/Heading";

export default function Add() {
	return (
		<>
			<Heading content="Add" />
			<form>
                <label htmlFor="title">
					Title <span className="reqdot">*</span>
				</label>
                    <input type="text" name="title" required />
				<label htmlFor="cat">
					Category <span className="reqdot">*</span>
				</label>
                    <input type="text" name="cat" required />
				<label htmlFor="tec">
					Technique <span className="reqdot">*</span>
				</label>
                    <input type="text" name="tec" required />
				<label htmlFor="no">
					Painting number <span className="reqdot">*</span>
				</label>
                    <input type="number" name="no" required/>
				<label htmlFor="year">
					Year and month <span className="reqdot">*</span>
				</label>
                    <input type="month" id="start" name="start" min="2019-01" />
				<label htmlFor="img">
					Image <span className="reqdot">*</span>
				</label>
				    <input type="file" name="img" id="img" className="file-input" required />
				<label htmlFor="description">
					Description <span className="reqdot">*</span>
				</label>
			        <textarea id="desc" name="desc"></textarea>
                <button className="addbtn" type="submit">Add painting</button>
            </form>
		</>
	);
}
