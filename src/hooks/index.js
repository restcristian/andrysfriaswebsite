import React, { useState, useEffect } from 'react';

export const useScroll = () => {
    const [scroll, setScroll] = useState({});

    const scrollHandler = e => {
        setScroll(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, []);

    return {
        scroll, 
        setScroll
    };

};