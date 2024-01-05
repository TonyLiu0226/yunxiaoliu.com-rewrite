import styles from '../styles/Index.module.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Link from 'next/link'

const Work = () => {
    return(
        <div>
        <h1 className={styles.title}>Work & Education Timeline</h1>
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
    date="Jun 2022 - Sep 2022"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"/>
  </svg>}
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
    icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 10c1.5 1.5 5.25 3 9 3s7.5-1.5 9-3m-9-1h.01M2 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1ZM14 5V3a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v2h8Z"/>
  </svg>}
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
  </VerticalTimeline>
    </div>
    </div>
    )
}

export default Work