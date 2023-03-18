const getAllTasks = (req, res) => {
    res.send("All items from the file")
}

const createTasks = (req, res) => {
    //res.send("creating")
    console.log(req.body);
    return res.json(req.body)
}

const getTasks = (req, res) => {
    res.send('get single task')
}

const updateTasks = (req, res) => {
    res.send('update task')
}

const deleteTasks = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTasks,
    getTasks,
    updateTasks,
    deleteTasks
}