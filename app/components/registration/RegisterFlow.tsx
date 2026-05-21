'use client';

import React, { useState } from 'react';
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
}

const RegisterFlow: React.FC<RegisterFlowProps> = ({ onClose }) => {
    const [step, setStep] = useState<RegistrationStep>(1);
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

    const nextStep = async (data: Partial<RegistrationData>) => {
        const updatedData = { ...formData, ...data };
        setFormData(updatedData);

        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
        else if (step === 3) {
            // Final submission
            setStep('success');
            try {
                await fetch('/api/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updatedData),
                });
            } catch (err) {
                console.error('Submission failed', err);
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
                        <h2 className={styles.title}>Sign Up</h2>
                        <PromoCard />
                        <ProgressIndicator currentStep={step} />
                    </>
                )}

                <div className={styles.content}>
                    {step === 1 && <Step1 onNext={nextStep} initialData={formData} />}
                    {step === 2 && <Step2 onNext={nextStep} onBack={prevStep} initialData={formData} />}
                    {step === 3 && <Step3 onNext={nextStep} onBack={prevStep} initialData={formData} />}
                    {step === 'success' && <OfferScreen onContinue={onClose} />}
                </div>
            </div>
        </div>
    );
};

export default RegisterFlow;
