import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas'></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum officia soluta, aspernatur velit, eos magnam consequatur, fuga deleniti veritatis illo facilis? Veniam facere quis quasi porro beatae distinctio ab natus!</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas illo cum sapiente minima rem labore sequi, deserunt assumenda odio asperiores officia dignissimos impedit facilis saepe exercitationem dolores a consectetur reprehenderit.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
