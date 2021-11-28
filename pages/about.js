import Head from 'next/head'
import Header from '../components/Header'
import Section01 from '../components/Section01'

export default function About() {
  return (
    <div >
      <Head>
        <title>Next Props</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className='px-4 w-full pageAnima' id='about'>
        <h2 className=''>About</h2>  
      </section>

    </div>
  )
}