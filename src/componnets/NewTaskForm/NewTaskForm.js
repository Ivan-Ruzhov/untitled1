import React from "react";
import  './NewTaskForm.css'
 const NewTaskForm =  () => {
    return (
        <header>
            <h1>todos</h1>
            <input className='new-todo' placeholder='What needs to be done?' autoFocus/>
        </header>
    );
}

export {NewTaskForm}
