import React from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.types';

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
        </header>
    );
};

export default Header;
