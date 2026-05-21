'use client';

import React, { useState } from 'react';
import styles from './Steps.module.css';
import { RegistrationData } from '../../types/registration';

interface Step1Props {
    onNext: (data: Partial<RegistrationData>) => void;
    initialData: RegistrationData;
}

const Step1: React.FC<Step1Props> = ({ onNext, initialData }) => {
    const [email, setEmail] = useState(initialData.email);
    const [password, setPassword] = useState(initialData.password || '');
    const [showPassword, setShowPassword] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes('@')) return setError('Please enter a valid email.');
        if (password.length < 6) return setError('Password must be at least 6 characters.');
        if (!acceptedTerms || !acceptedPrivacy) return setError('Please accept the terms and privacy policy.');

        onNext({ email, password });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h4 className={styles.stepTitle}>Sign up Details</h4>
            <p className={styles.stepSubtitle}>Registration takes less than a minute.</p>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.field}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>

            <div className={styles.field}>
                <label>Password</label>
                <div className={styles.passwordWrapper}>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button
                        type="button"
                        className={styles.toggleBtn}
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                </div>
            </div>

            <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={acceptedTerms}
                        onChange={() => setAcceptedTerms(!acceptedTerms)}
                    />
                    <span>I have read and accept Bankrolla <a href="#">Terms & Conditions</a>.</span>
                    <span className={styles.required}>*</span>
                </label>

                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={acceptedPrivacy}
                        onChange={() => setAcceptedPrivacy(!acceptedPrivacy)}
                    />
                    <span>I have read and accept the Bankrolla <a href="#">Privacy Policy</a>.</span>
                    <span className={styles.required}>*</span>
                </label>
            </div>

            <button type="submit" className={`${styles.submitBtn} btn-primary`}>
                SIGN UP
            </button>

            <p className={styles.switch}>
                Have an account? <a href="#">Sign In</a>
            </p>
        </form>
    );
};

export default Step1;
