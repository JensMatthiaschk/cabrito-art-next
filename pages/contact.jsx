import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { postEmail } from '../services/emailController.js';
import { TailSpin } from 'react-loader-spinner';
import Image from 'next/legacy/image.js';
import CabritoLogo from '../public/images/android-chrome-512x512.png'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Link from 'next/link'



export default function Contact() {


    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        subject: '',
        message: '',
    });

    const [touched, setTouched] = useState({
        from_name: false,
        reply_to: false,
        subject: false,
        message: false,
    });

    const { t } = useTranslation()
    const [postEmailResponse, setPostEmailResponse] = useState({})
    const [loading, setLoading] = useState(false)

    const onSubmit = async (e) => {
        try {
            setLoading(true)
            e.preventDefault();
            setPostEmailResponse('')
            const data = {
                "from_name": toSend.from_name,
                "reply_to": toSend.reply_to,
                "subject": toSend.subject,
                "message": toSend.message
            }
            const sendEmail = await postEmail(data)

            setPostEmailResponse(sendEmail)
            setToSend({
                from_name: '',
                reply_to: '',
                subject: '',
                message: '',
            });
            setTouched({
                from_name: false,
                reply_to: false,
                subject: false,
                message: false,
            });
            setLoading(false);
            // location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        if (!postEmailResponse.ok)
            setTouched({ ...touched, [e.target.name]: true })
    };

    console.log(touched)

    return (
        <>
            <section id="contact" className="bg-black text-white flex flex-col justify-between w-full min-h-[100vh]">
                <Navbar />
                <div className="flex flex-col">
                    <div className='md:px-40 px-8 bg-black text-white flex flex-col jusftify-center items-center min-w-full'>
                        <h1 className="text-2xl font-semibold items-start sm:mt-12 mt-24 w-full">{t('contact.section_title')}</h1>
                        <p className="text-left sm:mt-8 my-6 w-full">{t('contact.message')}</p>
                        <form className="flex flex-col gap-y-4 sm:mt-8 w-full " onSubmit={onSubmit} method="post"
                            encType='application/x-www-form-urlencoded'
                        >
                            <input
                                className={(touched.from_name ? "border-2 border-solid border-red-600" : "") + " px-2 bg-gray-600"}
                                type='text'
                                name='from_name'
                                placeholder={t('contact.form.name')}
                                value={toSend.from_name}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            <input
                                className={(touched.reply_to ? "border-2 border-solid border-red-600" : "") + " px-2 bg-gray-600"}
                                type='email'
                                name='reply_to'
                                placeholder={t('contact.form.email')}
                                value={toSend.reply_to}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            <input
                                className={(touched.subject ? "border-2 border-solid border-red-600" : "") + " px-2 bg-gray-600"}
                                type='text'
                                name='subject'
                                placeholder={t('contact.form.subject')}
                                value={toSend.subject}
                                onChange={handleChange}
                                onBlur={handleChange}
                            />
                            <textarea
                                className={(touched.message ? "border-2 border-solid border-red-600" : "") + " px-2 bg-gray-600"}
                                type='text'
                                name='message'
                                placeholder={t('contact.form.message')}
                                rows='10'
                                value={toSend.message}
                                onChange={handleChange}
                                onBlur={handleChange}
                                required
                            />
                            <p>*{t('general.required')}</p>
                            <button className="border w-fit px-10 py-1 hover:text-black hover:bg-white mt-5" type='submit'>{loading === true ? <TailSpin
                                height="1.5rem"
                                width="1.5rem"
                                color="currentColor"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            /> : <p>{t('general.submit')}</p>}</ button >
                        </form>

                        {postEmailResponse.ok === true ?
                            <div className="flex flex-col w-full mt-6">
                                <p className="text-green-600">email sent successfully!</p>
                                <p className="text-xl mt-2">{t('email-success')}</p>
                            </div> : postEmailResponse.ok === false &&
                            <div className="flex flex-col w-full mt-6">
                                <p className="text-red-600">email not sent</p>
                                <h3 className="text-xl mt-2">{t('email-error')}</h3>
                            </div>}

                        <div className='w-1/2 lg:w-1/4 sm:my-16 my-10 flex justify-center items-center'>
                            <Link href="/about"><Image src={CabritoLogo} alt="Cabrito-Logo"></Image></Link>
                        </div>
                    </div>
                    <Footer />
                </div>
            </section>
        </>
    )
}
