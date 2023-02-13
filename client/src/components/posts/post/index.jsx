import { useEffect, useState } from 'react'
import './index.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Post = () => {
	const [post, setPost] = useState([])
	const { pathname } = useLocation()
	const path = pathname.split('/')[1]

	useEffect(() => {
		const fetchPost = async () => {
			const { data } = await axios.get(`http://localhost:8800/api/posts/${path}`)
			setPost(data)
		}
		fetchPost()
	}, [path])

	return (
		<div className="post">
			<h1>{post.title}</h1>
			<p className="date">{new Date(post.createdAt).toDateString()} </p>
			<span className="cat">{post.cat}</span>
			<div className="full-desc">{post.desc}</div>
		</div>
	)
}

export default Post
