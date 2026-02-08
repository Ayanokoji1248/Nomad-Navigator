import dotenv from "dotenv"
import express from "express"
import cityRouter from "./routes/city.route.js"

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/city', cityRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})