import { Router } from 'express'
import Post from '../models/post.js'

const routes = new Router()

//post

routes.post('/', async (req, res) => {
	const newPost = new Post(req.body)
	try {
		const post = await newPost.save()
		res.status(200).json(post)
	} catch (error) {
		res.status(500).json(error)
	}
})

//put

routes.put('/:id', async (req, res) => {
	try {
		const post = await Post.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		)
		res.status(200).json(post)
	} catch (error) {
		res.status(500).json(error)
	}
})

//delete

routes.delete('/:id', async (req, res) => {
	try {
		await Post.findByIdAndDelete(req.params.id)
		res.status(200).json('deleted')
	} catch (error) {
		res.status(500).json(error)
	}
})

//get all posts

routes.get('/', async (req, res) => {
	try {
		const post = await Post.find()
		res.status(200).json(post)
	} catch (error) {
		res.status(500).json(error)
	}
})

//get single post

routes.get('/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id)
		res.status(200).json(post)
	} catch (error) {
		res.status(500).json(error)
	}
})

export default routes
