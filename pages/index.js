import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import AboutCard from '../components/AboutCard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="intro-card w-full flex-col items-center">
      <AboutCard></AboutCard>
    </div>
    <div className="work-card w-full flex-col items-center">

    </div>
    </>
  )
}
 


