import styles from '../styles/Index.module.css'
import { Card } from 'flowbite-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faYoutube, faSquareInstagram } from '@fortawesome/free-brands-svg-icons'

const Contacts = () => {
    return( 
        <div>
        <h1 className='mb-12 mt-6 text-center text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-white'>Contacts</h1>
      <div className="mx-0.5 w-full flex justify-center items-center"> 
    <Card className="!z-10 !max-w-screen-md !min-w-80 !w-full border-2 border-black border-solid">
      <div className="flex justify-between">
      <Link href="https://www.linkedin.com/in/yunxiaotonyliu/"><FontAwesomeIcon icon={faLinkedin} size='2x' className="dark:text-white"/></Link>
      <Link href="https://github.com/TonyLiu0226"><FontAwesomeIcon icon={faGithub} size='2x' className="dark:text-white"/></Link>
      <Link href="https://www.youtube.com/channel/UCYLZDU2vS-FeL1E2YaWrG3w"><FontAwesomeIcon icon={faYoutube} size='2x' className="dark:text-white"/></Link>
      <Link href="https://www.instagram.com/tony_26l?igsh=YTQwZjQ0NmI0OA=="><FontAwesomeIcon icon={faSquareInstagram} size='2x' className="dark:text-white"/></Link>
      </div>
    <Link href="https://drive.google.com/file/d/1aCyP7vbrY9AkXzAraJyCB_FFTNKGGAL-/view?usp=sharing"><p className="text-emerald-400 dark:text-emerald-100 text-sm md:text-base xl:text-lg">You can also view my resume here</p></Link>
    </Card>
    </div>
    </div>
    )
}

export default Contacts