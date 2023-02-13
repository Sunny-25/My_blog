import axios from 'axios'
import './index.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
	const [cats, setCats] = useState([])

	useEffect(() => {
		const fetchCats = async () => {
			try {
				const { data } = await axios.get('http://localhost:8800/api/cats')
				console.log(data)
				setCats(data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchCats()
	}, [])

	return (
		<div>
			<div className="search">
				<label htmlFor="search">Search</label>
				<input id="search" type="text" placeholder="something...." />
			</div>
			<div className="cats">
				{cats.map((i) => (
					<div key={i.title} className="cat">
						<Link className="link" to={`/?cat=${i.title}`}>
							<p className="catName">{i.title}</p>
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Hero
