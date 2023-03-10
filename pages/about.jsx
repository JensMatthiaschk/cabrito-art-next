import React, { useTransition } from 'react'
import IndexLayout from '../layout/layout'
import { useTranslation } from 'next-i18next';
import Link from 'next/link';


export default function About() {

  const { t } = useTranslation();

  return (
    <IndexLayout>
      <section id="about" className="flex flex-col min-h-[90vh] items-center">
        <div className="px-8 sm:px-40 xl:px-64 flex flex-col text-justify max-w-[1800px]">
          <h1 className="text-2xl font-semibold sm:mt-12 mt-24">{t('about.section_title')}</h1>
          <p className="mt-8">{t('about.content.part-1')}</p>
          <p className="mt-8">{t('about.content.part-2')}</p>
          <p className="mt-8 inline">{t('about.content.part-3')} <Link href="/artworks"><span className="underline">{t('general.here')}</span></Link> {t('about.content.part-4')}</p>
          <p className="mt-8">{t('about.content.part-5')}</p>
        </div>
      </section>
    </IndexLayout>
  )
}

About.PageLayout = IndexLayout;