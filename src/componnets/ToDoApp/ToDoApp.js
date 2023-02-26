import React from "react";
import {NewTaskForm} from '../NewTaskForm';
import {TaskList} from "../TaskList";
import {Footer} from "../Footer";
import './ToDoApp.css'
const ToDoApp = () => {
    return (
        <section className='todoapp'>
            <NewTaskForm/>
            <section className='main'>
                <TaskList/>
                <Footer/>
            </section>
        </section>

    );
}

export {ToDoApp}
