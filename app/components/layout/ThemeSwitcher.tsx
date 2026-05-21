'use client';

import React from 'react';
import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher: React.FC = () => {
    const toggleTheme = () => {
        const url = new URL(window.location.href);
        const currentTheme = url.searchParams.get('theme') || 'v1';
        const nextTheme = currentTheme === 'v1' ? 'v2' : 'v1';

        url.searchParams.set('theme', nextTheme);
        window.location.href = url.toString();
    };

    return (
        <button className={styles.switcher} onClick={toggleTheme} title="Switch Theme">
            🎨 <span className={styles.text}>Switch Theme</span>
        </button>
    );
};

export default ThemeSwitcher;
