import styles from '../styles/Index.module.css'
import { Card } from 'flowbite-react';

const AboutCard = () => {
    return(
        <div>
        <h1 className={styles.title}>About Me</h1>
      <div className="mx-0.5 w-full flex justify-center items-center"> 
    <Card className="!max-w-screen-xl !min-w-80 !w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:dark:bg-emerald-800 hover:bg-amber-300 duration-300">
      <h3 className="text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Yunxiao Liu
      </h3>
      <div className={styles.aboutCard}>
      <div className={styles.aboutImageCard}>
      <img className={styles.aboutImage} src="YL.png" alt="image 1"></img>
      </div>
      <div className={styles.aboutText}>
        <p className="font-normal text-gray-900 dark:text-gray-100">
          Hello, I am a third year Computer Engineering student at the University of British Columbia, focusing mainly on
          software engineering. I enjoy building meaningful side projects using the full-stack development skills I gained
          through school and previous work experiences. Some of my more recent projects include MoodSense, an AI-enhanced journaling
          app, and Dexbooru, a modernized anime image board. Outside of school and work, I enjoy playing video games, watching anime,
          hiking, skiing, and dining out.
        </p>
        <br></br>
        <p className="font-normal text-gray-900 dark:text-gray-100">
          Some of the tools and technologies I am familiar with include:
        </p>
        <ul>
          <li className="font-normal text-blue-600 dark:text-rose-400">Languages: JavaScript, TypeScript, Python, Java, C/C++</li>
          <li className="font-normal text-blue-600 dark:text-rose-400">Frameworks: React, React Native, Sveltekit, NextJS, Flask</li>
          <li className="font-normal text-blue-600 dark:text-rose-400">Databases: MongoDB, GraphQL, OracleDB, PostgreSQL</li>
          <li className="font-normal text-blue-600 dark:text-rose-400">Cloud: AWS Lambda, DynamoDB, S3, Cloudfront, ElastiCache</li>
        </ul>
        <br></br>
        <p className="font-normal text-gray-900 dark:text-gray-100">
          I am currently interested in learning more about AI and machine learning, and am looking to gain more experience with using cloud technologies
          such as AWS and Docker. I am also seeking internship opportunities for 2024 to further develop my professional career, so any advice, referrals,
          or job search tips would be welcome!
        </p>
      </div>
      </div>
    </Card>
    </div>
    </div>
    )
}

export default AboutCard