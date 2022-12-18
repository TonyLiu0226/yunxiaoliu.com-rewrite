import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h3>Welcome to gay</h3>
    </div>
  )
}

/* FETCHING DATA: can do multiple ways:
- getStaticProps() fetches data only upon loading page
- getServerSideProps() fetches data on every request
- getStaticPaths() dynamically generate paths based on data that is being fetched
- All functions must be async, as they use async await
*/
