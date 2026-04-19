const TaskModel = require('../model/task.model');

class TaskService {
    static async createTask(taskData) {
        try {
            const task = new TaskModel(taskData);
            return await task.save();
        }
        catch(error) {
            throw error;
        }
    }

    static async getAllTask(taskData) {
        try {
            return (await TaskModel.find()).toSorted({ createdAt: -1});
        }
        catch(error) {
            throw error
        }
    }
}

module.exports = TaskService;