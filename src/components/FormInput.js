import React, { useContext, useState, useRef } from "react";
import { DataContext } from "./DataProvider";

export default function FormInput() {
    const [tasks, setTasks] = useContext(DataContext);
    const [taskName, setTaskName] = useState("");
    const inputRef = useRef();

    const createTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, { name: taskName, complete: false }].reverse());
        setTaskName("");
        inputRef.current.focus();
    };

    return (
        <form autoComplete="off" onSubmit={createTask}>
            <input
                ref={inputRef}
                type="text"
                name="tasks"
                id="tasks"
                required
                placeholder="Nhập công việc...!"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value.toLowerCase())}
            />
            <button type="submit">Create</button>
        </form>
    );
}
