import Heading from "../layout/Heading";

export default function Home() {
	return (
		<>
			<Heading content="Home" />
			<div className="searchcont">
			    <input className="searchbar" 
			           type="text" 
				       placeholder="Search for paintings .." 
			    />
			</div>
		</>
	);
}
