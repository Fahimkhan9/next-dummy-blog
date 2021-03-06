import Head from 'next/head'
import { Hero } from '../comp/Hero'
import { Navigation } from '../comp/Navigation'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Hero />
    </div>
  )
}
