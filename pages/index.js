import Head from 'next/head'
import Example from '../components/Example'
import TrustedBrands from '../components/TrustedBrands'
import Mission from '../components/Mission'
import Services from '../components/Services'
import Testimonies from '../components/Testimonies';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Imeila Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Example />
        <TrustedBrands />
        <Mission />
        <Services />
        <Testimonies />
        <Footer />

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          Donkey Kong Productions
        </a>
      </footer> */}
    </>
  )
}
