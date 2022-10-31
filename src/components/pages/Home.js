import EnquiryForm from "../layout/EnquiryForm";
//import Featured from "../gallery/featured/Featured"; <Featured />
import Heading from "../layout/Heading";
import Searchbar from "../layout/Searchbar";
import SubHeading from "../layout/SubHeading";
import Slider from "../slider/Slider";

export default function Home() {

	return (
		<>
			<Heading content="Newest artwork" />
			<Slider />
			<Searchbar />
			<SubHeading subcontent="Featured" />
			
			<EnquiryForm />
		</>
	);
}
