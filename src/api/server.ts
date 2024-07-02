import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
    res.status(200).json({ message: 'Hello from Node.js server!' })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
