import React from 'react';
import { Task } from './types';

interface TaskItemProps {
    task: Task;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onToggle }) => {
    const taskStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '1px solid #ccc',
        backgroundColor: task.completed ? '#f0f0f0' : 'white',
        color: task.completed ? '#888' : 'black',
        textDecoration: task.completed ? 'line-through' : 'none',
    };

    const buttonStyle: React.CSSProperties = {
        marginLeft: 'auto',
        backgroundColor: '#ff4d4d',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
    };

    return (
        <li style={taskStyle}>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
            />
            <span>{task.text}</span>
            <button style={buttonStyle} onClick={() => onDelete(task.id)}>
                Удалить
            </button>
        </li>
    );
};

export default TaskItem;