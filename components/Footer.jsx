import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Footer() {


  const year = new Date().getFullYear();
  const { t } = useTranslation();


  return (
    <div className="w-full flex justify-center items-center h-[80px]">
      <div className="text-center break-words text-xs sm:text-sm" translate="no"><span className="text-xl sm:text-2xl m-2 p-0">©</span> {year} Cabrito Art Marketing. All rights reserved.  | <Link href="/impressum" className="underline">{t('general.site_notice')}</Link></div>
    </div>
  )
}
