const express = require("express")
const app = express()
const {todoValidator, editTodoValidator, completedValidator} = require('./validate.js')
const {todoModel} = require('./db.js')

app.use(express.json())


app.post('/todo',async (req,res) =>{
    const input = req.body;
    const validate = todoValidator.safeParse(input);
    if(!validate.success){

        res.status(404).json({message: validate.error})
        //console.log("validation error");
        return;
    }else{
        try{
            let payLoad = validate.data
            payLoad.completed = false;
           const returnValue = await todoModel.create(payLoad)
            console.log(returnValue);
            res.json({message: "Todo created in DB", data: returnValue})
        }catch(err){
            res.json({message: "Database error"})
        }

    }

})

app.get('/todos',async (req,res)=>{
    try{
        const data = await todoModel.find({});
        
        res.json(data)

    }catch(err){
        res.status(500).json({error: "Internal Server error"})
        console.log(err)
    }
})

app.post('/edit',async (req,res)=>{
    const bodyData = req.body;
    const validate = editTodoValidator.safeParse(bodyData);
    if(!validate.success){
        res.status(404).json({message: validate.error})
        return;
    }else{
        const dbResponse = await todoModel.updateOne({_id: bodyData._id},{$set: {title: bodyData.title, description: bodyData.description}});
        res.json(dbResponse);
    }
})

app.post('/completed',async (req,res)=>{
    const _id = req.body._id
    const validate = completedValidator.safeParse({_id});
    if(!validate.success){
        res.status(404).json({message: "Object Id is not a string"})
    }else{
       const dbResponse = await todoModel.updateOne({_id: _id},{$set: {completed: true}});
       res.json(dbResponse);
    }
})

app.delete("/delete",async (req,res)=>{
    const _id = req.body._id;
    const validate = completedValidator.safeParse({_id})
    if(!validate.success){
        res.status(404).json({message: "Object Id should be String", error: validate.error})
    }else{
        const dbResponse = await todoModel.deleteOne({_id: _id});
        res.json(dbResponse)
    }
})

app.listen(3000)


