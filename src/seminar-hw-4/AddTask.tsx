import React, { useState, useRef } from 'react';

interface AddTaskProps {
    onAdd: (text: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
    const [text, setText] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onAdd(text);
            setText('');
            inputRef.current?.focus();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                ref={inputRef}
                placeholder="Введите задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
};

export default AddTask;