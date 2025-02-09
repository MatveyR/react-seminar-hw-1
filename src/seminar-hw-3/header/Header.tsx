import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    name: string
}

const Header: React.FC<HeaderProps> = ({name}) => {
    return (
        <header className={styles['header']}>
            <h1>{name}</h1>
        </header>
    );
};

export default Header;