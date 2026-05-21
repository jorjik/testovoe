'use client';

import React, { createContext, useContext, useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

interface ThemeContextType {
    themeId: string;
}

const ThemeContext = createContext<ThemeContextType>({ themeId: 'v1' });

export const useTheme = () => useContext(ThemeContext);

const ThemeHandler: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const searchParams = useSearchParams();
    const [themeId, setThemeId] = useState('v1');

    useEffect(() => {
        const theme = searchParams.get('theme') || 'v1';
        setThemeId(theme);
        document.body.setAttribute('data-theme', theme);
    }, [searchParams]);

    return (
        <ThemeContext.Provider value={{ themeId }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Suspense fallback={<>{children}</>}>
            <ThemeHandler>{children}</ThemeHandler>
        </Suspense>
    );
};
