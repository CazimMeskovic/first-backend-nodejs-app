

    const express=require('express')
    const router=express.Router()
    
    const { getAllTask, getTask, uptdateTask, createTask,deleteTask} = require('../controllers/tasks')
    
    router.route('/').get(getAllTask).post(createTask)
    router.route('/:id').get(getTask).patch(uptdateTask).delete(deleteTask)
    
    module.exports= router 