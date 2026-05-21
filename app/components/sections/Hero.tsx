'use client';

import React from 'react';
import styles from './Hero.module.css';

interface HeroProps {
    content: {
        headline?: string;
        subheadline?: string;
        cta?: string;
        backgroundImage?: string;
    };
    themeId: string;
    onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, themeId, onCtaClick }) => {
    return (
        <section className={styles.hero}>
            <div
                className={styles.background}
                style={content.backgroundImage ? { backgroundImage: `url(${content.backgroundImage})` } : {}}
            >
                <div className={styles.overlay}></div>
                <div className={styles.glow}></div>
            </div>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span>SPECIAL OFFER</span>
                    </div>
                    <h1 className={styles.headline}>{content.headline}</h1>
                    <p className={styles.subheadline}>{content.subheadline}</p>
                    <button
                        className={`${styles.cta} btn-primary`}
                        onClick={onCtaClick}
                    >
                        {content.cta}
                    </button>
                    <div className={styles.tags}>
                        <span>⚡ FREE TO PLAY. WIN REAL REWARDS.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
