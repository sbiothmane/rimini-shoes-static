'use client'

import { useRef, useEffect, useState } from 'react';
import ScroolingBox from './ScroolingBox';

function Scroll({ shoes }) {
    const scrollRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const itemWidth = scrollContainer.children[0].offsetWidth;
        const totalWidth = itemWidth * shoes.length;
        scrollContainer.style.setProperty('--scroll-width', `-${totalWidth}px`);

        // Ensure we have enough items to create a seamless loop
        const minItems = Math.ceil(scrollContainer.offsetWidth / itemWidth) + 1;
        const itemsToAdd = Math.max(0, minItems - shoes.length);
        
        if (itemsToAdd > 0) {
            const additionalItems = shoes.slice(0, itemsToAdd);
            setExtraShoes(additionalItems);
        }

        const handleMouseEnter = () => setIsPaused(true);
        const handleMouseLeave = () => setIsPaused(false);

        scrollContainer.addEventListener('mouseenter', handleMouseEnter);
        scrollContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
            scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [shoes]);

    const [extraShoes, setExtraShoes] = useState([]);

    return (
        <div className="overflow-hidden w-full">
            <div 
                ref={scrollRef}
                className={`flex animate-scroll ${isPaused ? 'paused' : ''}`}
                style={{ width: 'max-content' }}
            >
                {[...shoes, ...extraShoes].map((shoe, index) => (
                    <ScroolingBox key={index} shoe={shoe} />
                ))}
            </div>
        </div>
    );
}

export default Scroll;