import React from 'react';
import Image from 'next/legacy/image';

export default function subSlider({ slides, current, setCurrent }) {
    return (
        <div className="w-[90%] md:w-3/4 mx-auto carousel carousel-center p-4 space-x-4 h-40 sm:h-64 items-center">
            {slides.map((image, index) =>
                <div onClick={() => setCurrent(index)} className={(index === current ? "h-20 w-20 sm:w-48 sm:h-48 snap-center" : "h-16 w-16 sm:w-40 sm:h-40") + " cursor-pointer carousel-item ease-in duration-100 relative"}>
                    <Image
                        src={image.image}
                        alt='/'
                        width="500"
                        height="500"
                        objectFit='cover'
                    />
                </div>
            )}
        </div>
    )
}
