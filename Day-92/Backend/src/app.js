const express = require('express')
const noteModel = require('./models/notes.model')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/notes',async (req,res)=>{
    const {title,description} = req.body

    const note = await noteModel.create({
        title,description
    })

    res.status(201).json({
        message : "note created successfully.",
        note,
    })
})

app.get('/notes',async (req,res)=>{
    const note = await noteModel.find()   // Database ke SAARE notes (Array)

    res.status(200).json({
        message : "note fetched successfully.",
        note   // Bhale hi naam 'note' hai, par iske andar saare notes ka array hai
    })
})

app.delete('/notes/:id',async (req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch('/notes/:id',async (req,res)=>{
    const id = req.params.id

    const {description} = req.body

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message : "note updated successfully."
    })
})



module.exports = app