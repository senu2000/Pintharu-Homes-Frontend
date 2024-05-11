import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';

const AnimatedTextSearch = () => {
    const [isInView, setIsInView] = useState(false);
    const [animationKey, setAnimationKey] = useState(0);

    // Using the useInView hook to detect when the component is in view
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger animation when the component is 50% visible
    });

    useEffect(() => {
        if (inView) {
            setIsInView(true);
        } else {
            setIsInView(false);
        }
    }, [inView]);

    // Function to handle scrolling and restarting the animation
    const handleScroll = () => {
        setAnimationKey((prevKey) => prevKey + 1);
    };

    return (
        <div ref={ref} onScroll={handleScroll}>
            <TypeAnimation
                key={animationKey} // Reset animation when key changes
                sequence={[
                    'Discover the perfect paint products to elevate your space',
                    6000, // 3 seconds delay before repeating
                    '', // Empty string to represent a pause
                    1000 // 5 seconds delay before repeating again
                ]}
                wrapper="p"
                speed={10} // Adjust typing speed as needed
                style={{ fontSize: '18px' }}
                repeat={Infinity}
            />

        </div>
    );
};

export default AnimatedTextSearch;
