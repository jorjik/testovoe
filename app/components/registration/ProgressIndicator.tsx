'use client';

import React from 'react';
import styles from './ProgressIndicator.module.css';

interface ProgressIndicatorProps {
    currentStep: number | string;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
    const steps = [1, 2, 3, '🎁'];
    const stepNumber = typeof currentStep === 'number' ? currentStep : 4;

    return (
        <div className={styles.wrapper}>
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div
                        className={`${styles.step} ${index + 1 <= stepNumber ? styles.active : ''} ${index + 1 < stepNumber ? styles.completed : ''}`}
                    >
                        {index + 1 < stepNumber ? '✓' : step}
                    </div>
                    {index < steps.length - 1 && (
                        <div className={`${styles.line} ${index + 1 < stepNumber ? styles.activeLine : ''}`}></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProgressIndicator;
