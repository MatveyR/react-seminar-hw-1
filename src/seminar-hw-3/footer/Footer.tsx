import React from "react";
import styles from './Footure.module.css';

interface FooterProps {
    phone: string,
    email: string
}

const Footer: React.FC<FooterProps> = ({phone, email}) => {
    return (
        <footer className={styles['footer']}>
            <div>Наши контакты</div>
            <div>Телефон: {phone}</div>
            <div>Почта: {email}</div>
        </footer>
    )
}

export default Footer;