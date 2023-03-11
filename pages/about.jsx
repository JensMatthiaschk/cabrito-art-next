import React, { useTransition } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';


export default function About() {

  const { t } = useTranslation();

  return (

    <div id="about" className="h-full overflow-scroll bg-black">
      <Navbar />
      <div className="flex flex-col px-8 lg:px-40 xl:px-64 text-justify max-w-[1800px] mt-12 sm:mt-24 h-full">
        <h1 className="text-2xl font-semibold">{t('about.section_title')}</h1>
        <p className="mt-8">{t('about.content.part-1')}</p>
        <p className="mt-8">{t('about.content.part-2')}</p>
        <p className="mt-8 inline">{t('about.content.part-3')} <Link href="/artworks"><span className="underline">{t('general.here')}</span></Link> {t('about.content.part-4')}</p>
        <p className="mt-8">{t('about.content.part-5')}</p>
      </div>
      <Footer />
    </div>

  )
}

