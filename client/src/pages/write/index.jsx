import React from 'react'
import Navbar from '../../components/navbar'
import './index.css'
import { useState } from 'react'
import axios from 'axios'

const url = 'http://localhost:8800/api/posts/'

const Write = () => {
	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')
	const [cat, setCat] = useState([])

	const handleSubmit = (e) => {
		e.preventDefault()

		const newPost = {
			title,
			desc,
			cat,
		}
		const a = async () => {
			try {
				await axios.post(url, newPost)
				window.location.href = '/'
			} catch (error) {
				console.log(error)
			}
		}

		a()
	}

	return (
		<div>
			<Navbar />
			<div className="write">
				<h1>write </h1>
				<form className="writeInput" onSubmit={handleSubmit}>
					<label htmlFor="newTitle">Title</label>
					<input type="text" id="newTitle" placeholder="Title ...." onChange={(e) => setTitle(e.target.value)} />
					<label htmlFor="newDesc">Description</label>
					<textarea rows={5} type="text" id="newDesc" placeholder="Description ...." onChange={(e) => setDesc(e.target.value)} />
					<div className="cats">
						<label htmlFor="newCats">
							Categories <i className="fas fa-chevron-down"></i>
						</label>

						<select name="cats" id="newCats" onChange={(e) => setCat(e.target.value)}>
							<option value="food">Food</option>
							<option value="animals">Animals</option>
							<option value="countries">Countries</option>
							<option value="food">Food</option>
							<option value="food">Food</option>
						</select>
					</div>
					<button className="subBtn" type="submit">
						Submit
					</button>
				</form>
			</div>
		</div>
	)
}

export default Write
