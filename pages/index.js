import Head from 'next/head'
import Example from '../components/Example'
import TrustedBrands2 from '../components/TrustedBrands2'
import TrustedBrands from '../components/TrustedBrands'
import Mission from '../components/Mission'
import Services from '../components/Services'
import Testimonies from '../components/Testimonies';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourceable</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="32x32"/>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32"/>
      </Head>

        <Example />
        <TrustedBrands />
        <Mission />
        <Services />
        <Testimonies />
        <Footer />
    </>
  )
}
