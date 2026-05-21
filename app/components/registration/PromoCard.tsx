'use client';

import React from 'react';
import styles from './PromoCard.module.css';

const PromoCard: React.FC = () => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <p className={styles.title}>Join Bankrolla and claim</p>
                <h3 className={styles.reward}>
                    <span className={styles.gold}>G</span> 200 000 GC
                </h3>
                <h3 className={styles.reward}>
                    + <span className={styles.sweeps}>S</span> 2 SC
                </h3>
            </div>
            <div className={styles.imagePlaceholder}>
                {/* Abstract casino chips / woman image placeholder */}
                <div className={styles.chips}>🎰</div>
            </div>
        </div>
    );
};

export default PromoCard;
