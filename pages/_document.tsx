import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head />
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
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}