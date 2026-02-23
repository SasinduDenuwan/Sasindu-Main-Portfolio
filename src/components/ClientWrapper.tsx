'use client';

import LoadingScreen from './LoadingScreen';
import { useState, useEffect } from 'react';

interface Props {
    children: React.ReactNode;
}

export default function ClientWrapper({ children }: Props) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Mark as loaded — the LoadingScreen handles its own timer
        // We just need this to ensure children mount alongside the loader
        setLoaded(true);
    }, []);

    return (
        <>
            <LoadingScreen />
            <div>{children}</div>
        </>
    );
}
