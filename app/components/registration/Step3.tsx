'use client';

import React, { useState } from 'react';
import styles from './Steps.module.css';
import { RegistrationData } from '../../types/registration';

interface Step3Props {
    onNext: (data: Partial<RegistrationData>) => void;
    onBack: () => void;
    initialData: RegistrationData;
}

const US_STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
];

const Step3: React.FC<Step3Props> = ({ onNext, onBack, initialData }) => {
    const [city, setCity] = useState(initialData.city);
    const [postalCode, setPostalCode] = useState(initialData.postalCode);
    const [state, setState] = useState(initialData.state);
    const [address, setAddress] = useState(initialData.address);
    const [phone, setPhone] = useState(initialData.phone);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!city || !postalCode || !state || !address || !phone) return setError('Please fill all fields.');

        onNext({ city, postalCode, state, address, phone });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h4 className={styles.stepTitle}>Create your account</h4>
            <p className={styles.stepSubtitle}>Registration takes less than a minute.</p>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.row}>
                <div className={styles.field}>
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        required
                    />
                </div>
                <div className={styles.field}>
                    <input
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        placeholder="Postal code"
                        required
                    />
                </div>
            </div>

            <div className={styles.field}>
                <select value={state} onChange={(e) => setState(e.target.value)} required>
                    <option value="">State</option>
                    {US_STATES.map(s => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            <div className={styles.field}>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    required
                />
            </div>

            <div className={styles.field}>
                <div className={styles.row}>
                    <div style={{ flex: '0 0 80px' }}>
                        <input type="text" value="+1" disabled style={{ textAlign: 'center' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Number"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <button type="button" className={styles.backBtn} onClick={onBack}>
                    ←
                </button>
                <button type="submit" className={`${styles.submitBtn} btn-primary`}>
                    CLAIM REWARD
                </button>
            </div>
        </form>
    );
};

export default Step3;
