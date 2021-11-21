import Head from 'next/head'
import Hero from '../components/Hero'
import TrustedBrands2 from '../components/TrustedBrands2'
import TrustedBrands from '../components/TrustedBrands'
import Mission from '../components/Mission'
import Steps from '../components/Steps'
import Testimonies from '../components/Testimonies';
import CTA from '../components/CTA';

export default function Main() {
  return (
    <>
      <Head>
        <title>Sourceable</title>
        <link rel="icon" href="/favicon-16x16.png" sizes="32x32"/>
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32"/>
      </Head>

        <Hero />
        {/* <LogoClouds /> */}
        {/* <TrustedBrands /> */}
        <Mission />
        <CTA />
        {/* <Steps /> */}
        {/* <Testimonies /> */}
        {/* <Footer /> */}
    </>
  )
}
