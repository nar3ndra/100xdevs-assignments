import TodoItem from "./TodoItem.jsx"
import React from 'react'
import { postTodos, fetchTodos } from "./data"

async function addTask(title,description,setTasks,tasks){
    let obj = {
        title: title,
        description: description,
    }
    try{
    let response = await postTodos(obj)
    setTasks([...tasks,response.data.data])}catch(err){
        console.log(err)
    }
}

async function fetchData(setTasks,tasks){
    try{
        let response = await fetchTodos()
        console.log(response.data);
        setTasks(response.data)}catch(err){
            console.log(err)
        }
}

export default function TodoList(props){
    const [tasks, setTasks] = React.useState([]);
    const [title,setTitle] = React.useState("");
    const [description,setDescription] = React.useState("");

    React.useEffect(()=>{
        fetchData(setTasks,tasks);
    },[])

    
    return(<>
    <div>
        
        <input type="text" value = {title} placeholder="Title" onChange={e => setTitle(e.target.value)}/>
        <input type = "text" value={description} placeholder="Description" onChange={e => setDescription(e.target.value)}/>
        <button onClick={() => addTask(title, description, setTasks, tasks)}>Add</button>
        {   
        tasks.map((task,index) =>{
            return <TodoItem key={task._id} task ={task} />
            })
        }
        

    </div>
    <div>
       
    </div>

    </>)


}