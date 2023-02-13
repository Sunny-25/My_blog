import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			unique: true,
			required: true,
		},
		desc: String,
		cat: String,
		image: String,
	},
	{ timestamps: true }
)

export default mongoose.model('Post', PostSchema)
