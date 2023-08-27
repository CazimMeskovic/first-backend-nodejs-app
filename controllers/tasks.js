const Task = require('../models/Task')
const asyncWrapper = require('../midelwere/async')

const getAllTask = asyncWrapper( async (req, res) => {
    
        const tasks = await Task.find({})
        //  res.status(200).json({ tasks })
        // res.status(200).json({tasks, amount:tasks.length})
        res.status(200)
            .json({ status: success, data: { tasks, nbHits: tasks.length } })
            
})
const createTask =asyncWrapper( async (req, res) => {
    
        const task = await Task.create(req.body)
        res.status(201).json({ task })
   
})
const getTask =asyncWrapper( async (req, res) => {
    
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        res.status(200).json({ task })
        if (!task) {
            return res.status(404).json({ msg: `no status with ${taskID}` })
        }
 

})

const deleteTask =asyncWrapper( async (req, res) => {
   
        const { id: taskID } = req.params
        const task = await Task.findByIdAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `no status with ${taskID}` })
        }
        res.status(200).json({ task })
  

})

const uptdateTask =asyncWrapper( async (req, res) => {
   
        const { id: taskID } = req.params
        const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).json({ msg: `no status with ${taskID}` })
        }
        res.status(200).json({ task })

 
})


module.exports = {
    getAllTask,
    createTask,
    getTask,
    uptdateTask,
    deleteTask
}

