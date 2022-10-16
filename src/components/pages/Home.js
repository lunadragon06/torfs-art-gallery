import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../layout/Heading";

export default function Home() {
	const [paintings, setPaintings] = useState([]);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);
	useEffect(() => {
		const loadPaintings = async()=> {
			const response = await axios.get('https://torfs-art-gallery.herokuapp.com/products')
			setPaintings(response.data)
		}
		loadPaintings();

	}, [])
	const onChangeHandler = (text)=> {
		let matches = []
		if (text.length>0) {
			matches = paintings.filter(paint=> {
				return paint.title.match(text)
			})
		}
		console.log('matches', matches)
		setSuggestions(matches)
		setText(text);
	}

	return (
		<>
			<Heading content="Home" />
			<div className="searchcont">
			    <input className="searchbar" 
			           type="text" 
				       placeholder="Search for paintings .."
					   onChange={e=>onChangeHandler(e.target.value)} 
					   value={text}
			    />
				{suggestions && suggestions.map((suggestions, i) =>
				<div className="result" key={i}>{suggestions.title}</div>
				)}
			</div>
		</>
	);
}
