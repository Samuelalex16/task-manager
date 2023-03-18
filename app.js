const express = require('express')
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

app.use(express.urlencoded({ extended: false }))

app.use(express.json())

//routes
app.get('/hello', (req, res) => {
    res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async() => {
    try {
        await connectDB()
        app.listen(port, console.log(`Server listening to ${port}`))
    } catch (error) {
        console.log(err)
    }
}
start()