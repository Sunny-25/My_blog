import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import postRoute from './routes/post.js'
import catRoute from './routes/cats.js'
const app = express()
dotenv.config()
const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())
mongoose.set('strictQuery', true)

//mongoose
mongoose.connect(process.env.MONGO).then(console.log('connected to mongodb')).catch(console.error())

app.use('/api/posts', postRoute)
app.use('/api/cats', catRoute)

app.listen(PORT, () => console.log(`backend running on port: http://localhost:${PORT}`))
