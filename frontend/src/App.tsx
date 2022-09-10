import React from "react";
import {ToDoListItem} from "./ToDoListItem/ToDoListItem";

// render a list of ToDoListItem components

export const ToDoList = () => {
    return (
        <ul>
            <ToDoListItem />
            <ToDoListItem />
            <ToDoListItem />
        </ul>
    )
}

