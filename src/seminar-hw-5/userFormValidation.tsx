import { useState, useCallback } from 'react';

interface FormValues {
    name: string;
    email: string;
    password: string;
}

interface FormErrors {
    name: string | null;
    email: string | null;
    password: string | null;
}

const useFormValidation = () => {
    const [values, setValues] = useState<FormValues>({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState<FormErrors>({ name: null, email: null, password: null });

    const validateField = useCallback((name: string, value: string) => {
        if (!value.trim()) {
            return 'Поле не может быть пустым';
        }
        switch (name) {
            case 'name':
                return value.length >= 3 ? null : 'Имя должно содержать хотя бы 3 символа';
            case 'email':
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Введите правильный email';
            case 'password':
                return value.length >= 6 ? null : 'Пароль должен содержать хотя бы 6 символов';
            default:
                return null;
        }
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }, [validateField]);

    const isFormValid = useCallback(() => {
        return Object.values(errors).every((error) => error === null) &&
            Object.values(values).every((value) => value.trim() !== '');
    }, [errors, values]);

    return { values, errors, handleChange, isFormValid, setErrors };
};

export default useFormValidation;