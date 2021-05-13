import React from 'react';
import "../app-header/app-header.css";

const AppHeader = ({toDo, done}) =>{
    return(
        <div className="app-header">
            <h1 className="app-header-heading">Todo List</h1>
            <small className="app-header-small">{toDo} more to do, {done} done</small>
        </div>
    )
}

export default AppHeader;