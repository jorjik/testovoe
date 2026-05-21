'use client';

import React from 'react';
import styles from './SocialProof.module.css';
import Image from 'next/image';

interface SocialProofProps {
    content: {
        headline: string;
        items: Array<{ name: string; action: string; time: string; likes: number }>;
    };
}

const SocialProof: React.FC<SocialProofProps> = ({ content }) => {
    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.headline}>{content.headline}</h2>
                <div className={styles.grid}>
                    {content.items.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                <div className={styles.avatar}>
                                    {item.name[0]}
                                </div>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.userInfo}>
                                    <span className={styles.userName}>{item.name}</span>
                                    <span className={styles.time}>{item.time}</span>
                                </div>
                                <p className={styles.action}>{item.action}</p>
                                <div className={styles.meta}>
                                    <span className={styles.likes}>❤️ {item.likes}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
