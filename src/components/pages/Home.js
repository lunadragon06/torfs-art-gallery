import EnquiryForm from "../layout/EnquiryForm";
import Heading from "../layout/Heading";
import Searchbar from "../layout/Searchbar";
import Slider from "../slider/Slider";

export default function Home() {

	return (
		<>
			<Searchbar />
			<Heading content="Newest artwork" />
			<Slider />
			<EnquiryForm />
		</>
	);
}
