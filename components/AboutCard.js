import styles from '../styles/Index.module.css'
import { Card } from 'flowbite-react';

const AboutCard = () => {
    return(
        <div>
        <h1 className='mb-12 mt-6 text-center text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-white'>About Me</h1>
      <div className="mx-0.5 w-full flex justify-center items-center"> 
    <Card className="Card !z-10 !max-w-screen-xl !min-w-80 !w-full transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:dark:bg-emerald-800 hover:bg-amber-300 duration-300 border-2 border-black border-solid">
      <h3 className="text-3xl md:text-4xl xl:text-5xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
        Yunxiao Liu
      </h3>
      <div className={styles.aboutCard}>
      <div className={styles.aboutImageCard}>
      <img className={styles.aboutImage} src="YL.png" alt="image 1"></img>
      </div>
      <div className={styles.aboutText}>
        <p className="font-normal text-gray-900 dark:text-gray-100 text-sm md:text-base xl:text-lg">
          Hello, I am a final year Computer Engineering student at the University of British Columbia, focusing mainly on
          software engineering. During my time in school, I have taken a variety of courses related to software development, machine learning, databases, and operating systems.
          These courses have allowed me to gain exposure to multiple programming languages and technologies, and build a strong foundation in skills essential to software engineering. I have also
          completed many side projects over the years, both independently and as part of a team, such as MoodSense, an AI-enhanced journaling
          app, and Flowleaflets, a streamlined transcription tool for medical logbooks.
        </p>
        <br></br>
        <p className="font-normal text-gray-900 dark:text-gray-100 text-sm md:text-base xl:text-lg">When I am not malding over school or work, I enjoy a variety of hobbies, from playing video games and watching anime to hiking and skiing. I've recently switched over to Arch Linux, and as a result I have developed some interest in tinkering with operating systems.
        I also enjoy travelling, and am currently planning a second trip to Japan this December after thoroughly enjoying my experience in the country last year.
        </p>
        <br></br>
        <p className="font-normal text-gray-900 dark:text-gray-100 text-sm md:text-base xl:text-lg">
          Some of the tools and technologies I like to work with include:
        </p>
        <ul>
          <li className="font-normal text-blue-600 dark:text-rose-400 text-sm md:text-base xl:text-lg">Languages: JavaScript, TypeScript, Python, Java, C/C++</li>
          <li className="font-normal text-blue-600 dark:text-rose-400 text-sm md:text-base xl:text-lg">Frameworks: React, React Native, Sveltekit, NextJS, Flask</li>
          <li className="font-normal text-blue-600 dark:text-rose-400 text-sm md:text-base xl:text-lg">Databases: MongoDB, GraphQL, OracleDB, PostgreSQL</li>
          <li className="font-normal text-blue-600 dark:text-rose-400 text-sm md:text-base xl:text-lg">Cloud: AWS Lambda, DynamoDB, S3, Cloudfront, ElastiCache</li>
          <li className="font-normal text-blue-600 dark:text-rose-400 text-sm md:text-base xl:text-lg">Data & ML: PyTorch, Tensorflow, scikit-learn, NumPy, pandas</li>
        </ul>
        <br></br>
        <p className="font-normal text-gray-900 dark:text-gray-100 text-sm md:text-base xl:text-lg">
          I am currently interested in learning more about AI and LLMs, and incorporating agentic tools into my workflow. I am currently seeking full-time opportunities for after I graduate in April 2026, so any advice, referrals, or tips would be welcome!
        </p>
      </div>
      </div>
    </Card>
    </div>
    </div>
    )
}

export default AboutCard