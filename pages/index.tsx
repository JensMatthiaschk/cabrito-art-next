import Image from 'next/image'
import CabritoLogo from '../public/images/android-chrome-512x512.png'
import Link from 'next/link'

export default function Home() {
  return (
    <section id="home" className="absolute top-0 left-0 px-20 h-full w-full flex flex-col justify-center items-center bg-black text-white m-auto">
      <div className="flex flex-col h-full justify-center items-center">
        <Link href="/about"><Image src={CabritoLogo} className="w-72" alt="Cabrito-Logo" priority={true}></Image></Link>
        <h1 className="text-white font-luckiest_guy pt-12 text-4xl text-center">Welcome to Cabrito Art!</h1>
      </div>
    </section>
  )
}
