import Heading from "../layout/typography/Heading";
import portrait from "../../assets/images/portrait.jpg";
import signature from "../../assets/signature.png";
import SubHeading from "../layout/SubHeading";

export default function About() {
	return (
		<>
			<Heading content="About" />
			<section className="bio">
			<article className="about">
				<div className="intro">
					<i>
						Firstly, Thank You so Much for given of Your Time Visiting my Website, “Torf’s Gallery of Art”, Showing my Own Paintings Only. 
					</i>
				</div>
				<div className="intro">
				    <img className="portrait" src={portrait} alt="the owner of the website" />
				</div>
			</article>
			<article className="who">
			    <SubHeading subcontent="Who Am I?" />
				<p>
				    Unfortunately (for me), I am Not a Professionally Educated Artist, but just Only Attended a few Painting Courses led by Skilled Artists. Nor can I say that I Sticks to any of the Techniques and Styles Taught on those Courses I have Participated in, but I have received some useful tips that I use when needed and when it fits into my work.
                </p>
				<p>
					Since I Retired from my Permanent Job Late in 2018, then my Pension is what Pays my Bills and that Provides Sufficient Financial Freedom, while Painting has become my Number One Passion and Pleasure, Something I usually do on Daily Basis, but No Stress to Produce, not ever.
                </p>
				<p>
					So, the Purpose of this Website is Not to Post Paintings for Sale, as None of Them are for Sale in the First Place, but rather a Site which Acts as a Showcase for my Work. My Online Gallery of Art is the Only Place where all of my Paintings can be Seen, and are Displayed all Together.
				</p>
			</article>
			<article className="what">
			    <SubHeading subcontent="What inspires me" />
				<p>
				    Some of which are Painted with Acrylic, while the Vast Majority are Oil Paintings on Canvas. My Preferred Style, when I Paint, is Figurative Maritime Motifs, then come Other Types of Motifs with Water and Waterways as an Important Component, but Sometimes I also may Try along Testing with Shape and Color.
				</p>
				<p>	
                    What Inspires me and what Motifs I choose to Paint, do Not have much in common with Techniques and Styles most Artists seems to Use Nowadays. Basically, I do Not Try to Paint in any Particular Way or Style, but rather What I Feel for in the Moment, and What I See for my Inner Eye, is What I Attach to the Canvas. Often then Figurative Elements with a good deal of Fantasy.
                    Environments that Inspire me, are the Sea and Boats/Ships after my 20 Years as a Seaman, as well as Norwegian Mountains and Nature, after Countless Trips as a Dedicated Sports Fisherman.
				</p>
			</article>
			<img className="signature" src={signature} alt="" />
			</section>
		</>
	);
}
