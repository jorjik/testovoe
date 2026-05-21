'use client';

import React, { useState } from 'react';
import StickyBar from './StickyBar';
import Header from './Header';
import Footer from '../sections/Footer';
import RegisterFlow from '../registration/RegisterFlow';
import ThemeSwitcher from './ThemeSwitcher';
import { useTheme } from '../ThemeProvider';
import { themesContent } from '../../config/content';

const LayoutOrchestrator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { themeId } = useTheme();
    const content = themesContent[themeId] || themesContent.v1;
    const [modalState, setModalState] = useState<{ open: boolean; mode: 'login' | 'signup' }>({
        open: false,
        mode: 'signup'
    });

    const openModal = (mode: 'login' | 'signup' = 'signup') => {
        setModalState({ open: true, mode });
    };

    const closeModal = () => {
        setModalState(prev => ({ ...prev, open: false }));
    };

    // Function to inject prop into children (Lander)
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            // @ts-ignore
            return React.cloneElement(child, { onOpenRegister: () => openModal('signup') });
        }
        return child;
    });

    return (
        <>
            <StickyBar content={content.promoBar} onCtaClick={() => openModal('signup')} />
            <Header
                content={content.header}
                themeId={themeId}
                onSignupClick={() => openModal('signup')}
                onLoginClick={() => openModal('login')}
            />
            <main>{childrenWithProps}</main>
            <Footer content={content.footer} themeId={themeId} />

            <ThemeSwitcher />

            {modalState.open && (
                <RegisterFlow
                    initialMode={modalState.mode}
                    onClose={closeModal}
                />
            )}
        </>
    );
};

export default LayoutOrchestrator;
