import { useState } from 'react';
import SliderModal from '../components/SliderModal';
import { SliderData } from '../components/sliderData';
import Image from 'next/legacy/image';
import { useTranslation } from 'next-i18next';
import Instagram from '../components/Instagram';
import { BsCaretDown, BsFillCaretDownFill } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import RubioPortrait from '../public/images/Rubio_portrait.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Artwork() {

  const [modalActive, setModalActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const { t, i18n } = useTranslation();
  const [touched, setTouched] = useState(false);
  const [current, setCurrent] = useState(0);
  const filter = t('artworks.filter.categories', { returnObjects: true })

  function handleDropdown() {
    setDropdownActive(!dropdownActive)
  }

  if (!Array.isArray(filter) || filter.length <= 0) {
    return null;
  }

  return (
    <section id="artworks" className="flex flex-col h-fit bg-black">
      <Navbar />
      <div className="px-8 lg:px-40 flex flex-col justify-center" onClick={() => { dropdownActive && setDropdownActive(false) }}>
        <h1 className="text-2xl font-semibold mt-24">{t('artworks.section_title')}</h1>
        <div className="flex flex-col sm:flex-row mt-24 lg:px-10 gap-x-10 md:gap-x-20 items-center w-full max-w-[1800px]">
          <div className="flex flex-col sm:w-1/2 xl:w-3/4">
            <h3 className="text-left text-xl font-semibold underline">Featured Artist</h3>
            <h4 className="mt-6 text-left text-xl font-semibold">Rubio</h4>
            <div className="mt-6 text-justify">
              <p>{t('artworks.content.part-1')}</p>
              <br />
              <p>{t('artworks.content.part-2')}</p>
              <br />
              <p>{t('artworks.content.part-3')}</p>
              <br />
              <p>{t('artworks.content.part-4')}</p>
            </div>
          </div>
          <div className="mt-12 sm:mt-0 w-1/2 xl:w-1/4 text-center">
            <Link href="/"><div className="relative">
              <Image
                className="rounded-full w-24 h-24 overflow-hidden"
                src={RubioPortrait}
                width="400"
                height="400"
                objectFit="cover"
                alt="/" />
              <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 ease-in duration-100 group">
                <p className="text-gray-300 hidden group-hover:block ease-in duration-100"><FaInstagram size={30} /></p>
              </div>
            </div></Link>
            <p className="text-xl font-hold mt-6">{t('general.follow_instagram')}</p>
            <Link href="/"><p className="pb-4 mt-4">@Artist</p></Link>
          </div>
        </div>

        <div className="flex justify-between mt-32">
          <div className="md:flex flex-row gap-x-4 hidden justify-between w-full text-sm lg:text-base">
            <p>{t('artworks.filter.title')}</p>
            <ul className="flex gap-x-6">
              {filter.map((item, index) =>
                <li className="hover:text-gray-400">{item}</li>
              )}
            </ul>
          </div>
          <div className="md:hidden flex flex-col w-full items-end p-2">
            <span onMouseEnter={() => setTouched(true)} onMouseLeave={() => setTouched(false)} className='flex items-center gap-x-2' onClick={handleDropdown} onBlur={() => setDropdownActive(false)}><p>{t('artworks.filter.title')}</p>{touched ? <BsFillCaretDownFill size={16} /> : <BsCaretDown size={16} />}</span>
            {dropdownActive ?
              <div className="relative">
                <ul className="flex flex-col absolute top-4 -right-4 bg-black p-4 gap-y-2 w-48 z-10">
                  {filter.map((item, index) =>
                    <li className="hover:text-gray-400">{item}</li>
                  )}
                </ul>
              </div>
              : null}
          </div>

        </div>
        <hr className="mt-1" />
        <Instagram setModalActive={setModalActive} setCurrent={setCurrent} />
        {modalActive ? <SliderModal slides={SliderData} modalActive={modalActive} setModalActive={setModalActive} setCurrent={setCurrent} current={current} /> : null}

      </div>
      <Footer />
    </section>

  )
}
