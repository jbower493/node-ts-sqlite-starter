import express from 'express'
import { db } from './db'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    try {
        const posts = db.prepare("SELECT * FROM posts").all()
        res.json({message: 'Hello world', posts })
    } catch (e) {
        res.status(500).json({error: 'Something went wrong'})
    }
})

app.listen(4000, () => {
    console.log('Server started on port 4000')
})