const { Schema, model } = require('mongoose');

const taskSchema = new Schema(
    {
        task: { type: String, required: true },
        dueDate: { type: Date, required: true },
        completed: { type: Boolean, default: false, required: true }
    }
);

const Task = model("Task", taskSchema);

module.exports = Task;
