import EnquiryForm from "../layout/ui/EnquiryForm";
import Featured from "../gallery/featured/Featured"; 
import Heading from "../layout/typography/Heading";
import Searchbar from "../layout/ui/Searchbar";
import Slider from "../gallery/slider/Slider";
import thumbnail from "../../assets/images/thumbnail.jpg";

export default function Home() {

	return (
		<>
			<Heading content="Newest artwork" />
			<Slider />
			<Searchbar />
			<Featured />
			<section className="welcome" style={{ margin: '3rem auto 4rem', maxWidth: '1000px', }}>
				<article className="img">
				<img src={thumbnail}
                             alt="thumbnail"
							 style={{ width: '318px', }}
                             onContextMenu={(e) => {
                                e.preventDefault(); 
                             }} 
                        />
				</article>
				<article className="txt">
					<div className="sub">
					    <h2>Hello, I'm <span style={{ textDecoration: 'underline', }}>Torfinn</span>,</h2>
					    <h2>but you can just call me <b>Torf</b>.</h2>
					</div>
					<hr />
					<p>
						I am a self-taught hobby artist based outside Trondheim, Norway. 
						I primarily work with oil painting on canvas, but occasionally I 
						use acryl. Much of my artwork features mostly maritime 
						motives and nature landscapes inspired by places I've been 
						travelling in my homeland, as well as abstract pictures from 
						time to time.
					</p>
					<b>Currently available for collaboration or networking.</b>
				</article>
			</section>
			<EnquiryForm />
		</>
	);
}
