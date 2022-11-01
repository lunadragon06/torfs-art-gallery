import EnquiryForm from "../layout/EnquiryForm";
import Featured from "../gallery/featured/Featured"; 
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";
import Searchbar from "../layout/Searchbar";
import Slider from "../slider/Slider";
import SubHeading from "../layout/SubHeading";

export default function Home() {

	return (
		<>
			<Heading content="Newest artwork" />
			<Slider />
			<Searchbar />
			<Featured />
			<section className="welcome" style={{ margin: '3rem auto 4rem', maxWidth: '1000px', }}>
				<article className="img">
					
				</article>
				<article className="txt">
					<SubHeading subcontent="Hello! I am Torfinn," />
					<SubHeading subcontent="but you can just call me Torf." />
					<p>
						I am a self-taught hobby artist based outside Trondheim, Norway. 
						I primarily work with oil painting on canvas, but occasionally I 
						use acryl as well. Much of my artwork features mostly maritime 
						motives and nature landscapes inspired by places I've been 
						travelling across my homeland, as well as abstract pictures from 
						time to time.
					</p>
					<p>Currently available for collaboration or networking.</p>
					<Link to="/about">Learn more</Link>
				</article>
			</section>
			<hr />
			<EnquiryForm />
		</>
	);
}
