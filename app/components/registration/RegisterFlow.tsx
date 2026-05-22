'use client';

import React, { useState, useEffect } from 'react';
import styles from './RegisterFlow.module.css';
import ProgressIndicator from './ProgressIndicator';
import PromoCard from './PromoCard';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import OfferScreen from '../offer/OfferScreen';
import { RegistrationData, RegistrationStep } from '../../types/registration';

interface RegisterFlowProps {
    onClose: () => void;
    initialMode?: 'login' | 'signup';
}

const RegisterFlow: React.FC<RegisterFlowProps> = ({ onClose, initialMode = 'signup' }) => {
    const [mode, setMode] = useState<'login' | 'signup'>(initialMode);
    const [step, setStep] = useState<RegistrationStep>(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<RegistrationData>({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        dob: { month: '', day: '', year: '' },
        city: '',
        postalCode: '',
        state: '',
        address: '',
        phone: '',
    });

    // Reset steps if switching back to signup
    useEffect(() => {
        if (mode === 'signup') {
            setStep(1);
            setIsSubmitting(false);
        }
    }, [mode]);

    const nextStep = async (data: Partial<RegistrationData>) => {
        const updatedData = { ...formData, ...data };
        setFormData(updatedData);

        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
        else if (step === 3) {
            console.log('Starting registration submission...');
            setIsSubmitting(true);

            try {
                console.log('Sending data to /api/register:', updatedData);
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData),
                });

                const result = await response.json();
                console.log('API Response:', result);

                if (!response.ok || !result.success) {
                    console.error('Submission failed:', result.error || 'Unknown error');
                } else {
                    console.log('Successfully registered and tracked!');
                }
            } catch (err) {
                console.error('Critical submission error:', err);
            } finally {
                setIsSubmitting(false);
                setStep('success'); // Always show success to user on LP
            }
        }
    };


    const prevStep = () => {
        if (step === 2) setStep(1);
        else if (step === 3) setStep(2);
    };

    return (
        <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className={styles.modal}>
                {step !== 'success' && (
                    <>
                        <button className={styles.closeBtn} onClick={onClose}>×</button>
                        <h2 className={styles.title}>{mode === 'signup' ? 'Create Account' : 'Welcome Back'}</h2>

                        {mode === 'signup' ? (
                            <>
                                <PromoCard />
                                <ProgressIndicator currentStep={step} />
                            </>
                        ) : (
                            <div className={styles.loginContent}>
                                <p className={styles.loginSubtitle}>Sign in to your account to continue playing</p>
                                {/* Simplified login mock for LP demo */}
                                <div className={styles.mockLogin}>
                                    <input type="text" placeholder="Email or Username" className={styles.input} />
                                    <input type="password" placeholder="Password" className={styles.input} />
                                    <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }} onClick={onClose}>
                                        LOG IN
                                    </button>
                                </div>
                            </div>
                        )}
                    </>
                )}

                <div className={styles.content}>
                    {mode === 'signup' && (
                        <>
                            {step === 1 && <Step1 onNext={nextStep} initialData={formData} />}
                            {step === 2 && <Step2 onNext={nextStep} onBack={prevStep} initialData={formData} />}
                            {step === 3 && <Step3 onNext={nextStep} onBack={prevStep} initialData={formData} isSubmitting={isSubmitting} />}
                            {step === 'success' && <OfferScreen onContinue={onClose} />}
                        </>
                    )}
                </div>

                {step !== 'success' && (
                    <div className={styles.switchMode}>
                        {mode === 'signup' ? (
                            <p>Already have an account? <button onClick={() => setMode('login')}>Log In</button></p>
                        ) : (
                            <p>Don't have an account? <button onClick={() => setMode('signup')}>Sign Up</button></p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterFlow;
