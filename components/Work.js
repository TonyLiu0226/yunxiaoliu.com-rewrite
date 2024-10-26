import styles from '../styles/Index.module.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Link from 'next/link'

const Work = () => {
    return(
        <div>
        <h1 className='mb-12 mt-6 text-center text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-white'>Work & Education Timeline</h1>
      <div className="mx-0.5 w-full flex justify-center items-center"> 
      <VerticalTimeline className="!max-w-screen-xl !min-w-80 !w-full text-gray-900 dark:text-white dark:bg-gray-800" lineColor={'rgb(251 191 36)'}>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(52 211 153)'}}
    date="Sep 2020 - Present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M1 17V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M5 15V1m8 18v-4"/>
  </svg>}
  >
    <Link href='https://www.linkedin.com/school/universityofbc/'>
    <h3 className="vertical-timeline-element-title">The University of British Columbia</h3>
    <h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
    <p>
      Bachelor of Applied Science in Computer Engineering
    </p>
    </Link>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(217 119 6)'}}
    date="May 2022 - Sep 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img src='/flyover.jpg' alt='Flyover Canada' className='w-18 h-18' />}
  >
    <Link href='https://www.linkedin.com/company/experience-flyover'>
    <h3 className="vertical-timeline-element-title">Guest Experience Guide</h3>
    <h4 className="vertical-timeline-element-subtitle">Flyover Canada</h4>
    <h5 className='text-md'>Vancouver, BC</h5>
    <p>
      Worked as a Guest Experience Guide at Flyover Canada, a 4D flight simulation experience in the Canada Place cruise ship terminal.
    </p>
    <ul>
      <li><p>- Worked a variety of stations such as selling tickets, editing and selling photos, and keeping track of retail inventory.</p></li>
      <li><p>- Scanned tickets and sorted customers into groups for timed entry to ensure a smooth experience for all guests.</p></li>
      <li><p>- Guided groups of up to 61 people through the entire experience, from preshow to safety demo to ride to exit, adhering to proper safety protocols.</p></li>
      <li><p>- Communicated effectively with guests and team members in a fast-paced environment to provide a memorable experience to thousands of people every day.</p></li>
    </ul>
    </Link>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(217 119 6)'}}
    date="Jun 2022 - Sep 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img src='/bigleaf.jpg' alt='The Big Leaf' className='w-18 h-18' />}
  >
    <Link href='https://www.linkedin.com/company/thebigleaf/?originalSubdomain=ca'>
    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">The Big Leaf</h4>
    <h5 className='text-md'>Remote</h5>
    <p>
      Worked on two projects during my part-time internship:
    </p>
    <ul>
      <li><p>- Building a React Native app for MyPanion, a healthcare startup</p></li>
      <li><p>- Redesigning handlers.ca to use React to improve responsiveness and usability</p></li>
    </ul>
    </Link>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(217 119 6)'}}
    date="Jan 2023 - Apr 2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img src='/invoke.jpg' alt='Invoke Media' className='w-18 h-18' />}
  >
    <Link href='https://www.linkedin.com/company/invoke-co/'>
    <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Invoke Media</h4>
    <h5 className='text-md'>Vancouver, BC</h5>
    <p>
      Full-time internship where I focused on developing frontend and backend features for Incrowd, a multiplatform app for recording and streaming live events.
    </p>
    <p>
      Utilized a wide variety of languages, frameworks, and tools, such as TypeScript, React, GraphQL, AWS Lambda, S3, DynamoDB, and ElastiCache.
      </p>
    </Link>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(217 119 6)'}}
    date="May 2023 - Dec 2023"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img src='/flyover.jpg' alt='Flyover Canada' className='w-18 h-18' />}
  >
    <Link href='https://www.linkedin.com/company/experience-flyover'>
    <h3 className="vertical-timeline-element-title">Guest Experience Guide</h3>
    <h4 className="vertical-timeline-element-subtitle">Flyover Canada</h4>
    <h5 className='text-md'>Vancouver, BC</h5>
    <p>
      I came back LMAO...
    </p>
    </Link>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(217 119 6)'}}
    date="Dec 2023 - Feb 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img src='/boardspace.jpg' alt='BoardSpace' className='w-18 h-18' />}
  >
    <Link href='https://www.linkedin.com/company/board-space/'>
    <h3 className="vertical-timeline-element-title">AI Software Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">BoardSpace Inc.</h4>
    <h5 className='text-md'>Remote</h5>
    <p>
      As part of the Riipen Level Up program, worked on a chatbot to improve customer support for a condo management platform. 
    </p>
    <ul>
    <li><p>- Leveraged OpenAI's GPT-4-turbo LLM to generate responses to common questions.</p></li>
    <li><p>- Developed a Python Flask API to connect the chatbot to the condo management platform.</p></li>
    <li><p>- Utilized the LangChain framework with OpenAI Embeddings API and FAISS vector database to implement retrieval augmented generation on support website pages.</p></li>
    <li><p>- Created a Python script to automatically generate tags for new document uploads, eliminating the need for manual curation.</p></li>
    </ul>
    </Link>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(217 119 6)'}}
    date="Jun 2024 - Aug 2024"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img src='/invoke.jpg' alt='Invoke Media' className='w-18 h-18' />}
  >
    <Link href='https://www.linkedin.com/company/invoke-co/'>
    <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
    <h4 className="vertical-timeline-element-subtitle">Invoke Media</h4>
    <h5 className='text-md'>Vancouver, BC</h5>
    <p>
      I came back yet again LMAO....
    </p>
    <p>
      But fr though, this time I had much more responsibilities, working on six projects during my return internship.
      </p>
      <ul>
      <li><p>- Learned about the importance of thorough unit and end-to-end testing, spearheading the implementation of test suites for new features.</p></li>
      <li><p>- Developed frontend and backend features for client facing applications with minimal guidance in a fast-paced timeline, regularly syncing with stakeholders for feedback.</p></li>
      <li><p>- Leveraged many technologies not touched on in my previous internship, such as Next.js, Nest.js, Docker, PHP, and PostgreSQL.</p></li>
      </ul>
    </Link>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(217 119 6)'}}
    date="Sep 2024 - Present"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<img src='/netint.jpg' alt='NETINT Technologies' className='w-18 h-18' />}
  >
    <Link href='https://www.linkedin.com/company/netint-technologies'>
    <h3 className="vertical-timeline-element-title">AI Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">NETINT Technologies Inc.</h4>
    <h5 className='text-md'>Burnaby, BC</h5>
    <p>
      More AI and LLM stuffs, basically building and improving upon ChatGPT clones for internal use.
    </p>
    </Link>
  </VerticalTimelineElement>
  </VerticalTimeline>
    </div>
    </div>
    )
}

export default Work