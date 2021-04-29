import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import BillChart from '@components/BillChart'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Political Prototype</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Look Up Bills" />
        
           <BillChart/>
        
      </main>

      <Footer />
    </div>
  )
}
