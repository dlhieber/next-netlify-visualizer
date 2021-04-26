import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import BillChart from '@components/BillChart'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This Will Be a Bill Page Maybe?" />
           <BillChart/>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
