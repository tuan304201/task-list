import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [tasks, setTasks] = useState(() => {
        const taskStore = JSON.parse(localStorage.getItem("taskStore"));
        return taskStore || [];
    });

    useEffect(() => {
        localStorage.setItem("taskStore", JSON.stringify(tasks));
    }, [tasks]);

    return <DataContext.Provider value={[tasks, setTasks]}>{props.children}</DataContext.Provider>;
};
