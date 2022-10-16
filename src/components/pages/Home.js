import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Heading from "../layout/Heading";

export default function Home() {
	const [paintings, setPaintings] = useState([]);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const loadPaintings = async()=> {
			const response = await axios.get('https://torfs-art-gallery.herokuapp.com/products')
			setPaintings(response.data);
		}
		loadPaintings();

	}, [])
	const onSuggestHandler = (text)=> {
		setText(text);
		setSuggestions([]);
	}
	const onChangeHandler = (text)=> {
		let matches = []
		if (text.length>0) {
			matches = paintings.filter(paint=> {
				return paint.title.match(text);
			})
		}
		setSuggestions(matches);
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
					   onBlur={()=>{ 
						setTimeout(() => {
							setSuggestions([])
						}, 100);
					   }}
			    />
				{suggestions && suggestions.map((suggestions, i) =>
				<Link to ={`painting/${suggestions.id}`} className="result" key={i} 
				      onClick={() => onSuggestHandler(suggestions.title)}>
						{suggestions.title}
				</Link>
				)}
			</div>
		</>
	);
}
