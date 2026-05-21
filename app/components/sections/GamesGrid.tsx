'use client';

import React from 'react';
import styles from './GamesGrid.module.css';
import Image from 'next/image';

interface GamesGridProps {
    content: {
        headline: string;
        subheadline: string;
        cta: string;
    };
    onExploreClick?: () => void;
}

const GamesGrid: React.FC<GamesGridProps> = ({ content, onExploreClick }) => {
    const games = [
        { title: 'Queen of the Nile', category: 'Slots', image: '/assets/game-placeholder.png' },
        { title: 'Coin Express', category: 'Jackpot', image: '/assets/game-placeholder.png' },
        { title: 'Le Viking', category: 'Adventure', active: true, image: '/assets/game-placeholder.png' },
        { title: 'Crapless Bubble', category: 'Table', image: '/assets/game-placeholder.png' },
        { title: '2 Wild 2 Die', category: 'Slots', image: '/assets/game-placeholder.png' },
    ];

    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <div className={styles.header}>
                    <h2 className={styles.headline}>{content.headline}</h2>
                    <p className={styles.subheadline}>{content.subheadline}</p>
                </div>

                <div className={styles.grid}>
                    {games.map((game, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${game.active ? styles.activeCard : ''}`}
                            onClick={onExploreClick}
                        >
                            <div className={styles.gameImage}>
                                <Image
                                    src={game.image}
                                    alt={game.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 200px"
                                    className={styles.img}
                                />
                                {!game.image && <div className={styles.placeholderIcon}>🎰</div>}
                            </div>
                            <div className={styles.gameInfo}>
                                <span className={styles.category}>{game.category}</span>
                                <h3 className={styles.gameTitle}>{game.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrapper}>
                    <button className="btn-primary" onClick={onExploreClick}>{content.cta}</button>
                </div>
            </div>
        </section>
    );
};

export default GamesGrid;
