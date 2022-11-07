import React, { useContext } from "react";
import ListItem from "./ListItem";
import { DataContext } from "./DataProvider";

export default function List() {
    const [tasks, setTasks] = useContext(DataContext);

    const switchComplete = (id) => {
        const newTasks = [...tasks];
        newTasks.forEach((task, index) => {
            if (index === id) {
                task.complete = !task.complete;
            }
        });
        setTasks(newTasks);
    };

    const handleEditTasks = (editvalue, id) => {
        const newTasks = [...tasks];
        newTasks.forEach((task, index) => {
            if (index === id) {
                task.name = editvalue;
            }
        });
        setTasks(newTasks);
    };

    return (
        <ul>
            {tasks.map((task, index) => (
                <ListItem
                    task={task}
                    key={index}
                    id={index}
                    checkedComplete={switchComplete}
                    handleEditTasks={handleEditTasks}
                />
            ))}
        </ul>
    );
}
