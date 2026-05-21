'use client';

import React, { useState } from 'react';
import StickyBar from './StickyBar';
import Header from './Header';
import Footer from '../sections/Footer';
import RegisterFlow from '../registration/RegisterFlow';
import { useTheme } from '../ThemeProvider';
import { themesContent } from '../../config/content';

const LayoutOrchestrator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { themeId } = useTheme();
    const content = themesContent[themeId] || themesContent.v1;
    const [showRegister, setShowRegister] = useState(false);

    // Function to inject prop into children (Lander)
    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            // @ts-ignore
            return React.cloneElement(child, { onOpenRegister: () => setShowRegister(true) });
        }
        return child;
    });

    return (
        <>
            <StickyBar content={content.promoBar} onCtaClick={() => setShowRegister(true)} />
            <Header
                content={content.header}
                themeId={themeId}
                onSignupClick={() => setShowRegister(true)}
            />
            <main>{childrenWithProps}</main>
            <Footer content={content.footer} themeId={themeId} />

            {showRegister && <RegisterFlow onClose={() => setShowRegister(false)} />}
        </>
    );
};

export default LayoutOrchestrator;
