import { useState } from 'react'
import Image from 'next/legacy/image'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai';
import SubSlider from './SubSlider';


const SliderModal = ({ slides, modalActive, setModalActive, setCurrent, current }) => {

    const length = slides.length

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery' className="fixed top-0 left-0 right-0 bottom-0 bg-black/90 h-screen">
            <div className={modalActive && "fixed top-0 left-0 text-white p-6 z-20"}>
                <AiOutlineClose onClick={() => setModalActive(false)} size={20} />
            </div>
            <div className="carousel flex flex-col justify-center pt-6 h-full">
                {slides.map((slide, index) =>
                    <div className="relative">
                        <div key={index} className={index === current ? 'opacity-100 duration-300 relative flex items-center justify-center' : 'opacity-0'}>
                            <FaArrowCircleLeft onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)} className="absolute left-[30px] text-white/70 cursor-pointer select-none z-10 w-6 sm:w-10" size={40} />
                            {index === current &&
                                    <Image
                                        src={slide.image}
                                        alt='/'
                                        width="1200"
                                        height="900"
                                        objectFit='contain'
                                    />
                            }
                            <FaArrowCircleRight onClick={() => setCurrent(current === length - 1 ? 0 : current + 1)} className="absolute right-[30px] text-white/70 cursor-pointer select-none z-10 w-6 sm:w-10" size={40} />
                        </div>
                        <div className={index === current ? "mt-4 flex flex-col gap-y-2 sm:text-base text-xs mx-auto text-center" : "hidden"}>
                            <h3>title:</h3>
                            <p>description:</p>
                            <p>materials:</p>
                            <p>description</p>
                            <p>price: </p>
                        </div>
                    </div>
                )}
                <SubSlider slides={slides} current={current} setCurrent={setCurrent} />
            </div>
        </div >
    )
}

export default SliderModal