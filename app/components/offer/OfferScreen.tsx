'use client';

import React from 'react';
import styles from './OfferScreen.module.css';

interface OfferScreenProps {
    onContinue: () => void;
}

const OfferScreen: React.FC<OfferScreenProps> = ({ onContinue }) => {
    return (
        <div className={styles.container}>
            <button className={styles.closeBtn} onClick={onContinue} aria-label="Close">×</button>
            <div className={styles.header}>
                <h2 className={styles.badge}>EXCLUSIVE FOR NEW PLAYERS</h2>
                <h1 className={styles.title}>Your First Purchase Bonus</h1>
                <p className={styles.subtitle}>Claim this one-time offer and start winning big!</p>
            </div>

            <div className={styles.card}>
                <div className={styles.popularBadge}>MOST POPULAR</div>
                <div className={styles.offerInfo}>
                    <div className={styles.value}>
                        <span className={styles.amount}>$9.99</span>
                    </div>
                    <div className={styles.items}>
                        <div className={styles.item}>
                            <span className={styles.goldCount}>250,000</span>
                            <span className={styles.goldLabel}>GOLD COINS</span>
                        </div>
                        <div className={styles.plus}>+</div>
                        <div className={styles.item}>
                            <span className={styles.sweepsCount}>25</span>
                            <span className={styles.sweepsLabel}>SWEEPS COINS</span>
                        </div>
                    </div>
                </div>
                <button className={`${styles.cta} btn-primary`}>GET THE OFFER</button>
            </div>

            <div className={styles.paymentMethods}>
                <div className={styles.methodsGrid}>
                    <div className={styles.method}>VISA</div>
                    <div className={styles.method}>MasterCard</div>
                    <div className={styles.method}>AMEX</div>
                    <div className={styles.method}>Discover</div>
                </div>
                <p className={styles.securityText}>🔒 256-bit Secure Encryption</p>
            </div>

            <button className={styles.skipBtn} onClick={onContinue}>
                No thanks, take me to the games
            </button>
        </div>
    );
};

export default OfferScreen;
