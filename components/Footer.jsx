import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {


  const year = new Date().getFullYear();
  const { t } = useTranslation();


  return (
    <div className="w-full text-center px-8 bg-black text-white pb-5 min-h-fit">
      <div className="break-words text-xs sm:text-sm" translate="no"><span className="text-xl sm:text-2xl ">©</span> {year} Cabrito Art Marketing. All rights reserved.  | <Link href="/impressum" className="underline">{t('general.site_notice')}</Link></div>
    </div>
  )
}
