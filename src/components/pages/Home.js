import axios from "axios";
import { useEffect, useState } from "react";
import Heading from "../layout/Heading";

export default function Home() {
	const [paintings, setPaintings] = useState([]);
	const [text, setText] = useState('');
	useEffect(() => {
		const loadPaintings = async()=> {
			const response = await axios.get('https://torfs-art-gallery.herokuapp.com/products')
			//console.log(response.data)
			setPaintings(response.data)
		}
		loadPaintings();

	}, [])
	const onChangeHandler = (text)=> {
		setText(text)
	}

	return (
		<>
			<Heading content="Home" />
			<div className="searchcont">
				<div>{text}</div>
			    <input className="searchbar" 
			           type="text" 
				       placeholder="Search for paintings .."
					   onChange={e=>onChangeHandler(e.target.value)} 
					   value={text}
			    />
			</div>
		</>
	);
}
