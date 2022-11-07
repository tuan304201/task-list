import React, { useContext, useState } from "react";
import { DataContext } from "./DataProvider";

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [tasks, setTasks] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTasks = [...tasks];
        newTasks.forEach((task) => {
            task.complete = !checkAll;
        });
        setCheckAll(!checkAll);
        setTasks(newTasks);
    };

    const handleDelete = () => {
        const newTasks = tasks.filter((task) => {
            return task.complete === false;
        });
        setTasks(newTasks);
        setCheckAll(false);
    };

    return (
        <>
            {tasks.length === 0 ? (
                <>
                    <h2 className="title-empty">Hiện tại chưa có công việc nào!</h2>
                </>
            ) : (
                <div className="row">
                    <label htmlFor="all" className="check-all">
                        <input type="checkbox" name="all" id="all" onClick={handleCheckAll} />
                    </label>
                    <p>Bạn đang có {tasks.filter((task) => task.complete === false).length} công việc</p>
                    <button id="delete" onClick={handleDelete}>
                        Delete
                    </button>
                </div>
            )}
        </>
    );
}
