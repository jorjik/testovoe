'use client';

import React, { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQProps {
    content: {
        headline: string;
        items: Array<{ question: string; answer: string }>;
    };
}

const FAQ: React.FC<FAQProps> = ({ content }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.headline}>{content.headline}</h2>
                <div className={styles.list}>
                    {content.items.map((item, index) => (
                        <div key={index} className={`${styles.item} ${openIndex === index ? styles.open : ''}`}>
                            <button className={styles.question} onClick={() => toggle(index)}>
                                {item.question}
                                <span className={styles.icon}>{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className={styles.answer}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
