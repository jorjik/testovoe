'use client';

import React, { useState } from 'react';
import styles from './Steps.module.css';
import { RegistrationData } from '../../types/registration';

interface Step2Props {
    onNext: (data: Partial<RegistrationData>) => void;
    onBack: () => void;
    initialData: RegistrationData;
}

const Step2: React.FC<Step2Props> = ({ onNext, onBack, initialData }) => {
    const [firstName, setFirstName] = useState(initialData.firstName);
    const [lastName, setLastName] = useState(initialData.lastName);
    const [month, setMonth] = useState(initialData.dob.month);
    const [day, setDay] = useState(initialData.dob.day);
    const [year, setYear] = useState(initialData.dob.year);
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !lastName || !month || !day || !year) return setError('Please fill all fields.');

        // Age validation
        const birthDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        const age = new Date().getFullYear() - birthDate.getFullYear();
        if (age < 18) return setError('You must be 18+ to register.');

        onNext({ firstName, lastName, dob: { month, day, year } });
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h4 className={styles.stepTitle}>Confirm your details</h4>
            <p className={styles.stepSubtitle}>Registration takes less than a minute.</p>

            {error && <p className={styles.error}>{error}</p>}

            <div className={styles.field}>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                />
            </div>

            <div className={styles.field}>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                />
            </div>

            <div className={styles.field}>
                <label>Date of Birth:</label>
                <div className={styles.row}>
                    <select value={month} onChange={(e) => setMonth(e.target.value)} required>
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(m => (
                            <option key={m} value={m}>{new Date(0, m - 1).toLocaleString('default', { month: 'long' })}</option>
                        ))}
                    </select>
                    <select value={day} onChange={(e) => setDay(e.target.value)} required>
                        <option value="">Day</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                            <option key={d} value={d}>{d}</option>
                        ))}
                    </select>
                    <select value={year} onChange={(e) => setYear(e.target.value)} required>
                        <option value="">Year</option>
                        {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(y => (
                            <option key={y} value={y}>{y}</option>
                        ))}
                    </select>
                </div>
            </div>

            <button type="submit" className={`${styles.submitBtn} btn-primary`}>
                NEXT
            </button>
        </form>
    );
};

export default Step2;
