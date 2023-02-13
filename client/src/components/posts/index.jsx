import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './index.css'
const Posts = () => {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await axios.get('http://localhost:8800/api/posts')
			setPosts(data)
		}
		fetchPosts()
	})

	return (
		<div className="posts">
			{posts.map((post) => (
				<div key={post._id}>
					<Link to={`/${post._id}`} className="link">
						<h1 className="title">{post.title}</h1>
					</Link>
					<p className="date">{new Date(post.createdAt).toDateString()}</p>
					<span className="postCat">{post.cat}</span>
					<p className="desc">{post.desc}</p>
					<Link className="link" to={`/${post._id}`}>
						Read more
					</Link>
				</div>
			))}
		</div>
	)
}

export default Posts
