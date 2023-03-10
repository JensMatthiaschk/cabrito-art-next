import React from 'react'
import Image from 'next/legacy/image'
import { BsArrowsAngleExpand } from 'react-icons/bs'

export default function InstagramImg({ socialImg, setModalActiveDefinite, setCurrent, selectedImg }) {

    return (
        <div onClick={() => { setModalActiveDefinite(true); setCurrent(selectedImg) }} className="relative py-1.5">
            <Image
                src={socialImg}
                alt='/'
                width="1200"
                height="1200"
                objectFit='cover'
            />
            <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 ease-in duration-100 group">
                <p className="text-gray-300 hidden group-hover:block ease-in duration-100"><BsArrowsAngleExpand size={30} /></p>
            </div>
        </div>
    )
}
