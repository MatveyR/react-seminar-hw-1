import React, { useRef, useEffect } from 'react';
import { Task } from './types';

interface CurrentTaskProps {
    tasks: Task[];
}

const CurrentTask: React.FC<CurrentTaskProps> = ({ tasks }) => {
    const prevTaskRef = useRef<string | null>(null);
    const currentTask = tasks.length > 0 ? tasks[tasks.length - 1].text : 'Нет задач';

    useEffect(() => {
        prevTaskRef.current = currentTask;
    }, [currentTask]);

    return (
        <div className="current-task">
            <h3>Текущая задача: {currentTask}</h3>
    <h3>Предыдущая задача: {prevTaskRef.current || 'Нет данных'}</h3>
    </div>
);
};

export default CurrentTask;