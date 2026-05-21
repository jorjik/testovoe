'use client';

import React from 'react';
import styles from './StickyBar.module.css';

interface StickyBarProps {
    content: {
        offer: string;
        cta: string;
    };
    onCtaClick?: () => void;
}

const StickyBar: React.FC<StickyBarProps> = ({ content, onCtaClick }) => {
    return (
        <div className={styles.bar}>
            <div className={styles.content}>
                <span className={styles.offer}>{content.offer}</span>
                <button className={styles.cta} onClick={onCtaClick}>{content.cta}</button>
            </div>
        </div>
    );
};

export default StickyBar;
