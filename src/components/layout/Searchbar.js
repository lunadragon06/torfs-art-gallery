import { API } from "../../constants/api";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";

const results = API;

export default function Searchbar() {
	const [paintings, setPaintings] = useState([]);
	const [text, setText] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const loadPaintings = async()=> {
			const response = await axios.get(results);
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
			<div className="searchcont">
			    <FaSearch className="icon"
                          style={{
						  left: '16px',
                          position: 'relative',
						  top: '54px',
                }} />
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
				{suggestions && suggestions.map((suggestion, i) =>
				    <Link to ={`painting/${suggestion.id}`} className="result" key={i} 
				          onClick={() => onSuggestHandler(suggestion.title)}>
						    {suggestion.title}
				    </Link>
				)}
			</div>
		</>
	);
}