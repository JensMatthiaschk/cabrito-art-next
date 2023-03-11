import Image from 'next/image'
import CabritoLogo from '../public/images/android-chrome-512x512.png'
import Link from 'next/link'

export default function Home() {
  return (
    <section id="home" className="h-full">
      <div className="flex flex-col h-full justify-center items-center px-8">
        <Link href="/about"><Image src={CabritoLogo} className="w-72" alt="Cabrito-Logo" priority={true}></Image></Link>
        <h1 className="text-white font-luckiest_guy pt-12 text-4xl text-center">Welcome to Cabrito Art!</h1>
      </div>
    </section>
  )
}
