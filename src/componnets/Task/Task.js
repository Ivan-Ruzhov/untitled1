import React from "react";
import './Task.css';
import { formatDistanceToNow } from 'date-fns';
const Task = ({value, className}) => {
    if(className === 'editing') {
        return (
            <li className = {className}>
                <div className='view'>
                    <input className='toggle' type="checkbox"/>
                    <label>
                        <span className='description'>{value}</span>
                        <span className='created'>
                     created {formatDistanceToNow(Date.now())} </span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button className='icon icon-destroy'></button>
                </div>
                <input type="text" className="edit" value="Editing task"/>
            </li>
        );
    }
    return (
       <li className = {className}>
          <div className='view'>
              <input className='toggle' type="checkbox"/>
              <label>
                  <span className='description'>{value}</span>
                  <span className='created'>
                     created {formatDistanceToNow(Date.now())} </span>
              </label>
              <button className='icon icon-edit'></button>
              <button className='icon icon-destroy'></button>
          </div>

       </li>
    );
}

export {Task}