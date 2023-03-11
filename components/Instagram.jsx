import React from 'react';
import InstagramImg from './InstagramImg';
import { SliderData } from './sliderData';
import Masonry from 'react-masonry-css';
import Image1 from '../public/images/image1.webp';
import Image2 from '../public/images/image2.webp';
import Image3 from '../public/images/image3.webp';
import Image4 from '../public/images/image4.webp';
import Image5 from '../public/images/image5.webp';
import Image6 from '../public/images/image6.webp';
import Image7 from '../public/images/image7.webp';
import Image8 from '../public/images/image8.webp';
import Image9 from '../public/images/image9.webp';
import Image10 from '../public/images/image10.webp';
import Image11 from '../public/images/image11.webp';
import Image12 from '../public/images/image12.webp';
import Image13 from '../public/images/image13.webp';

export default function Instagram({ setModalActive, setCurrent }) {

    const Imgs = [Image1,
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12,
        Image13
    ]

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };

    return (
        <div className="max-w-[1240px] mx-auto text-center py-20">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-3"
                columnClassName="my-masonry-grid_column"
            >
                {Imgs.map((image, index) =>
                    <InstagramImg key={index} selectedImg={index} setModalActiveDefinite={setModalActive} socialImg={image} setCurrent={setCurrent} />
                )}
            </Masonry >
        </div>
    )
}
