// src/VantaBackground.js
import React, { useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const VantaBackground = () => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = NET({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 4.00,
            scaleMobile: 1.00,
            color: 0xb3b3b3,
            backgroundColor: 0xf8f8fa,
            points: 4.00,
            maxDistance: 19.00,
            spacing: 20.00
        });

        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return <div ref={vantaRef} className="VantaBackground" />;
};

export default VantaBackground;