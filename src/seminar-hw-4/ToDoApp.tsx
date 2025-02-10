import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import CurrentTask from './CurrentTask';
import styles from './styles.module.css';

const ToDoApp: React.FC = () => {
    const [tasks, setTasks] = useState<{ id: number; text: string; completed: boolean }[]>([]);

    const addTask = (text: string) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleTask = (id: number) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    return (
        <div className={styles['app']}>
            <h1>ToDo List</h1>
            <AddTask onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
            <CurrentTask tasks={tasks} />
        </div>
    );
};

export default ToDoApp;