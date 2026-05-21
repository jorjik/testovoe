'use client';

import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
    content: {
        disclaimer: string;
        copyright: string;
        links: Array<{ label: string; href: string }>;
    };
    themeId: string;
}

const Footer: React.FC<FooterProps> = ({ content, themeId }) => {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.container} container`}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        {themeId === 'v1' ? 'SpinQuest' : '🧭 LUCK IS A JOURNEY'}
                    </div>
                    <div className={styles.links}>
                        {content.links.map((link, index) => (
                            <a key={index} href={link.href} className={styles.link}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.middle}>
                    <p className={styles.disclaimer}>{content.disclaimer}</p>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.badges}>
                        <span className={styles.age}>18+</span>
                        <span className={styles.secure}>🔒 100% SECURE</span>
                    </div>
                    <p className={styles.copyright}>{content.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
