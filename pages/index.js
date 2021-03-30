import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hola soy javier</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          otra pagina<a href="https://nextjs.org">devis</a>
        </h1>
        <nav>
          <Link href="/timeline"><a>time line</a></Link>
        </nav>
        

        
      </main>

      
    </div>
  )
}
