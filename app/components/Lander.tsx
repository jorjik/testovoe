'use client';

import React from 'react';
import Hero from './sections/Hero';
import SocialProof from './sections/SocialProof';
import GamesGrid from './sections/GamesGrid';
import FAQ from './sections/FAQ';
import { useTheme } from './ThemeProvider';
import { themesContent } from '../config/content';

interface LanderProps {
    onOpenRegister?: () => void;
}

const Lander: React.FC<LanderProps> = ({ onOpenRegister }) => {
    const { themeId } = useTheme();
    const content = themesContent[themeId] || themesContent.v1;

    return (
        <>
            <Hero
                content={content.hero}
                themeId={themeId}
                onCtaClick={onOpenRegister}
            />
            <SocialProof content={content.socialProof} />
            <GamesGrid content={content.games} onExploreClick={onOpenRegister} />
            <FAQ content={content.faq} />
        </>
    );
};

export default Lander;
