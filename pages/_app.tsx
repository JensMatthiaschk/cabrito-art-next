import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Luckiest_Guy, Roboto_Mono } from 'next/font/google';
import ClientOnly from '../components/ClientOnly'
import '../services/i18n'
import Head from 'next/head'


const luckiest_guy = Luckiest_Guy({
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['system-ui', 'arial'],
  variable: '--font-luckiest_guy'
})

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  fallback: ['system-ui', 'arial'],
  variable: '--font-roboto_mono'
})



function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ClientOnly>
      <Head>
        <title>Cabrito Art</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="manifest" href="/images/site.webmanifest" />
        <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/images/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={`${luckiest_guy.variable} ${roboto_mono.variable} font-roboto_mono h-full`}>
        <Component {...pageProps} />
      </div>
    </ClientOnly>
  )
}

export default MyApp
