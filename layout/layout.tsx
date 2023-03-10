import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function IndexLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="absolute top-0 left-0 bg-black text-white min-h-full w-full">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}
