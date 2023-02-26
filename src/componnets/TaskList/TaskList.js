import React from "react";
import './TaskList.css'
import {Task} from "../Task";
const TaskList = () => {
    return (
       <ul className='todo-list'>
          <Task value='Completed task' className='completed'/>
           <Task  value='Editing' className='editing'/>

           <Task value='Active task' className='Active'/>
       </ul>
    );
}

export {TaskList}