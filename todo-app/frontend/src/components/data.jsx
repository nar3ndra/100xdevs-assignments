import React from 'react'
import axios from 'axios'

export const postTodos = async (todoObject) =>{
    let response;
    try{response = await axios.post("http://localhost:3000/todo",todoObject)
}catch(err){
        console.log(err)
        return;
    }
    return response;
}

export const fetchTodos = async () =>{
    let data;
    try{
        data = await axios.get('http://localhost:3000/todos')
    }catch(err){
        console.log(err)
    }
    return data;
}

export const display = () =>{
    return "Hello from Data file";
}
