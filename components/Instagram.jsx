import React from 'react'
import InstagramImg from './InstagramImg'
import { SliderData } from './sliderData'

export default function Instagram({ setModalActive, setCurrent }) {
    return (
        <div className="max-w-[1240px] mx-auto text-center py-20">
            <div className="columns-none sm:columns-2 lg:columns-3">
                {SliderData.map((image, index) =>
                    <InstagramImg key={index} selectedImg={index} setModalActiveDefinite={setModalActive} socialImg={image.image} setCurrent={setCurrent} />
                )}
            </div>
        </div>
    )
}
