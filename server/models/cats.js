import mongoose from 'mongoose'

const CatSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			unique: true,
			required: true,
		},
		count: Number,
	},
	{ timestamps: true }
)

export default mongoose.model('Cat', CatSchema)
