import React from 'react'
import Image from 'next/image'
import CabritoLogo from '../public/images/android-chrome-512x512.png'

export default function Loader() {
  return (
    <div className="h-screen w-full bg-black text-white text-xl flex flex-col items-center justify-center">
      <div>
        <Image src={CabritoLogo} className="w-32 h-32 mb-16" alt="Cabrito-Logo"></Image>
      </div>
      <p>Loading...</p>

    </div>
  )
}
