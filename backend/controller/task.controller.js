const taskService = require('../services/task.service');

exports.createTask = async (req, res, next) => {
    try {
        const {name, description, date, priority, done} = req.body;

        const task = await taskService.createTask({
            name, 
            description,
            date, 
            priority,
            done
        });

        res.json ({
            status: true,
            success: 'Task sucessfully created',
            data: task
        });
    }
    catch (error) {
        next(error);
    }
};

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await taskService.getAllTasks();

        res.json ({
            status: true,
            data: tasks
        })
    }
    catch (error) {
        next (error);
    }
};

