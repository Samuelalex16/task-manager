const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://samuel:123@nodeexpressprojects.bxo8dlk.mongodb.net/task-manager?retryWrites=true&w=majority'

const connectDB = (url) => {
    mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
}

module.exports = connectDB