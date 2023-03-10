import React, { useTransition } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';


export default function About() {

  const { t } = useTranslation();

  return (

    <section id="about" className="flex flex-col h-full items-center justify-between">
      <Navbar />
      <div className="px-8 sm:px-40 xl:px-64 flex flex-col text-justify max-w-[1800px] h-full">
        <h1 className="text-2xl font-semibold sm:mt-12 mt-24">{t('about.section_title')}</h1>
        <p className="mt-8">{t('about.content.part-1')}</p>
        <p className="mt-8">{t('about.content.part-2')}</p>
        <p className="mt-8 inline">{t('about.content.part-3')} <Link href="/artworks"><span className="underline">{t('general.here')}</span></Link> {t('about.content.part-4')}</p>
        <p className="mt-8">{t('about.content.part-5')}</p>
      </div>
      <Footer />
    </section>

  )
}

