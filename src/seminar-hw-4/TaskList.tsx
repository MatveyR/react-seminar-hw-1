import { Component } from 'react';
import TaskItem from './TaskItem';
import { Task } from './types';

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

class TaskList extends Component<TaskListProps> {
    render() {
        const { tasks, onDelete, onToggle } = this.props;
        return (
            <ul className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        );
    }
}

export default TaskList;