import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import authRoute from './routes/auth.js'

// cors solution established
const corsOption = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: true,
  optionsSuccessStatus: 204,
}

const corsOptions = {
  origin: 'https://cleanhub.netlify.app',
  // origin: 'http://localhost:3000',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

const app = express()
dotenv.config()
const PORT = process.env.PORT || 8800
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to mongoDB.')
  } catch (error) {
    throw error
  }
}
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!')
})

// Middlewares
app.use(express.json())
app.use(cors(corsOptions))
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
  return res
    .status(200)
    .json({ msg: 'You are welcome to CleanHub API for recyclables ' })
})

app.listen(PORT, () => {
  connect()
  console.log(`App running at port ${PORT}`)
})
