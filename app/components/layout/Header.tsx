'use client';

import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    content: {
        login: string;
        signup: string;
    };
    themeId: string;
    onSignupClick?: () => void;
    onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ content, themeId, onSignupClick, onLoginClick }) => {
    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <div className={styles.logo}>
                    {themeId === 'v1' ? (
                        <span className={styles.spinQuest}>SpinQuest</span>
                    ) : (
                        <span className={styles.compass}>🧭 LUCK IS A JOURNEY</span>
                    )}
                </div>
                <div className={styles.actions}>
                    <button className={styles.loginBtn} onClick={onLoginClick}>{content.login}</button>
                    <button
                        className={`${styles.signupBtn} btn-primary`}
                        onClick={onSignupClick}
                    >
                        {content.signup}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
