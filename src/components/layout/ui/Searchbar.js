import { API, BASE_URL } from "../../../constants/data";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from "react";

const results = BASE_URL + API;

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
				return paint.title.match(text) || paint.year.match(text);
			})
		}
		setSuggestions(matches);
		setText(text);
	}

	return (
		<>
			<div className="searchcont" style={{ width: '100%', }}>
			    <FaSearch className="icon"
                          style={{
						  left: '16px',
                          position: 'relative',
						  top: '50px',
                }} />
			    <input className="searchbar" 
			           type="text" 
				       placeholder="Search painting titles or year ..."
					   onChange={e=>onChangeHandler(e.target.value)} 
					   value={text} 
					   onBlur={()=>{ 
						setTimeout(() => {
							setSuggestions([])
						}, 100);
					   }}
			    />
                <div className="tab" style={{ width: '100%', }}>
				{suggestions && suggestions.map((suggestion, i) =>
				    <Link to ={`painting/${suggestion.id}`} className="result" key={i} 
				          onClick={() => onSuggestHandler(suggestion.title || suggestion.year)}>
						    {suggestion.title} ({suggestion.year})
				    </Link>
				)}
                </div>
			</div>
		</>
	);
}