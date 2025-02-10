import React, { useRef, useEffect, useMemo, useState } from 'react';
import useFormValidation from './userFormValidation.tsx';

const UserForm: React.FC = () => {
    const { values, errors, handleChange, isFormValid, setErrors } = useFormValidation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid()) {
            if (!values.name.trim()) {
                setErrors((prev) => ({ ...prev, name: 'Поле не может быть пустым' }));
            }
            if (!values.email.trim()) {
                setErrors((prev) => ({ ...prev, email: 'Поле не может быть пустым' }));
            }
            if (!values.password.trim()) {
                setErrors((prev) => ({ ...prev, password: 'Поле не может быть пустым' }));
            }
            if (!values.name.trim() && nameRef.current) nameRef.current.focus();
            else if (!values.email.trim() && emailRef.current) emailRef.current.focus();
            else if (!values.password.trim() && passwordRef.current) passwordRef.current.focus();
            return;
        }
        setIsSubmitted(true);
    };

    const successMessage = useMemo(() => {
        return isSubmitted ? 'Форма успешно отправлена' : null;
    }, [isSubmitted]);

    useEffect(() => {
        console.log('Форма валидна:', isFormValid());
    }, [isFormValid]);

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div>
                    <label>Имя:</label>
                    <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        ref={nameRef}
                    />
                    {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        ref={emailRef}
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Пароль:</label>
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        ref={passwordRef}
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                </div>
                <button type="submit" disabled={!isFormValid()}>
                    Отправить
                </button>
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
};

export default UserForm;