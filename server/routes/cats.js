import { Router } from 'express'
import Cat from '../models/cats.js'

const routes = new Router()

//post

routes.post('/', async (req, res) => {
	const newCat = new Cat(req.body)
	try {
		const cat = await newCat.save()
		res.status(200).json(cat)
	} catch (error) {
		res.status(500).json(error)
	}
})

//put

routes.put('/:id', async (req, res) => {
	try {
		const cat = await Cat.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		)
		res.status(200).json(cat)
	} catch (error) {
		res.status(500).json(error)
	}
})

//delete

routes.delete('/:id', async (req, res) => {
	try {
		await Cat.findByIdAndDelete(req.params.id)
		res.status(200).json('deleted')
	} catch (error) {
		res.status(500).json(error)
	}
})

//get all cats

routes.get('/', async (req, res) => {
	try {
		const cat = await Cat.find()
		res.status(200).json(cat)
	} catch (error) {
		res.status(500).json(error)
	}
})

//get single post

routes.get('/:id', async (req, res) => {
	try {
		const cat = await Cat.findById(req.params.id)
		res.status(200).json(cat)
	} catch (error) {
		res.status(500).json(error)
	}
})

export default routes
