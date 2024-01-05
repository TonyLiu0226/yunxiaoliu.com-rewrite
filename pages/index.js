import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import AboutCard from '../components/AboutCard'
import Projects from '../components/Projects'
import Work from '../components/Work'
import Courses from '../components/Courses'
import Contacts from '../components/Contacts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div id="intro-card" className="w-full flex-col items-center">
      <AboutCard></AboutCard>
    </div>
    <div id="work-card" className="w-full flex-col items-center">
      <Work></Work>
    </div>
    <div id="projects-card"className="w-full flex-col items-center">
      <Projects></Projects>
    </div>
    <div id="courses-card" className="w-full flex-col items-center">
      <Courses></Courses>
    </div>
    <div id="contacts-card" className="w-full flex-col items-center">
      <Contacts></Contacts>
    </div>
    </>
  )
}
 


