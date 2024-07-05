import React from 'react';

function TodoItem({task }) {

 return (
 <div className="todo-item">
    <p>{task.title}</p>
    <p>{task.description}</p>
 
 </div>
 );
}
export default TodoItem;