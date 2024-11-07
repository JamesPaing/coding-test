'use client';

import React, { useEffect, useState } from 'react';
import SvgWrapper from '@/components/wrappers/SvgWrapper';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/assets/images/banner-bg.png',
        '/assets/images/banner-bg.png',
        '/assets/images/banner-bg.png',
    ];

    // Next slide function
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    // Auto-play effect: Change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval); // Clear interval when component unmounts
    }, []);

    return (
        <div className="flex flex-col w-full gap-2 px-3 pt-2 pb-2">
            {/* Carousel container with auto-play */}
            <div className="relative w-full h-[180px] rounded-lg overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {slides.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full h-full"
                        >
                            <div
                                className="banner bg-no-repeat bg-cover w-full h-[180px]"
                                style={{
                                    backgroundImage: `url(${src})`,
                                }}
                            >
                                <div className="w-[35%] flex flex-col justify-between font-semibold text-white min-w-[150px] px-6 py-7 h-full uppercase">
                                    <div className="text-sm font-bold">
                                        Rescue
                                    </div>
                                    <div className="text-sm font-bold text-secondary">
                                        Bonus
                                    </div>
                                    <div className="text-sm">
                                        We are here for you
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Notification section */}
            <p className="flex items-center gap-2 text-sm text-primary">
                <SvgWrapper
                    alt="Notification"
                    src="/assets/bell.svg"
                    className="w-4 h-4"
                />
                <span className="line-clamp-1">
                    ¡FELICIDADES artxxxxipa! GANADOR DESTACADO
                </span>
            </p>
        </div>
    );
};

export default Banner;
