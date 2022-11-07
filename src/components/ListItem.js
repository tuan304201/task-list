import React, { useState, useRef } from "react";

export default function ListItem({ task, id, checkedComplete, handleEditTasks }) {
    const [edit, setEdit] = useState(false);
    const [editValue, setEditValue] = useState(task.name);
    const toast = useRef();
    const handleEdit = () => {
        setEdit(true);
    };

    const showSuccess = () => {
        toast.current.show({
            severity: "success",
            summary: "Success Message",
            detail: "Message Content",
            life: 3000,
        });
    };

    const handleSave = (id) => {
        setEdit(false);
        if (editValue) {
            handleEditTasks(editValue, id);
        } else {
            setEditValue(task.name);
        }
    };

    if (edit) {
        return (
            <li>
                <input
                    type="text"
                    id="editValue"
                    name="editValue"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                />
                <button onClick={() => handleSave(id)} ref={toast}>
                    Save
                </button>
            </li>
        );
    } else {
        return (
            <li>
                <label htmlFor={id} className={task.complete ? "active" : ""}>
                    <input
                        type="checkbox"
                        className="check-task"
                        id={id}
                        checked={task.complete}
                        onChange={() => checkedComplete(id)}
                    />
                    <span className="title-task">{task.name}</span>
                </label>
                <button disabled={task.complete} onClick={(handleEdit, showSuccess)}>
                    Edit
                </button>
            </li>
        );
    }
}
