const Task = require('../../models/task.cjs');

module.exports = {
    index,
    edit,
    del,
    create,
};

async function index(req, res) {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function del(req, res) {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("All good")
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

async function create(req, res) {
    try {
        if (req.body.completed === "on") {
            req.body.completed = true
        } else {
            req.body.completed = false
        }
        const createdTask = await Task.create(req.body)
        res.status(200).json(createdTask)
    } catch (e) {
        res.status(400).json({ msg: e.message })
    }
}

async function edit(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true });
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function show(req, res) {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}
