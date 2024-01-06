import styles from '../styles/Index.module.css'
import ProjectCard from '../components/ProjectCard'

const ProjectList = [
  { Title: 'MoodSense',
    Description: 'An AI-enhanced journaling app that performs sentiment analysis on journal entries and comments about your experiences.',
    Technologies: 'Python, scikit-learn, Pandas, NumPy, TypeScript, NextJS, Firebase',
    Link: 'https://github.com/TonyLiu0226/next-entries-client/tree/master'},

  { Title: 'Dexbooru',
    Description: 'A modernized anime image board for users to share content through posts. Users can like and comment on posts, and can also chat with each other live.',
    Technologies: 'TypeScript, Sveltekit, Redis, PostgreSQL, TailwindCSS, S3, CloudFront',
    Link: 'https://github.com/t-shah02/dexbooru-rewrite'},

  { Title: 'Epilog',
    Description: 'A seizure tracker app for iOS and Android. Users can log daily seizure activity, record seizures via the camera, and keep track of important events and medications on a built-in calendar.',
    Technologies: 'TypeScript, React Native, Firebase, NodeJS',
    Link: 'https://github.com/ubclaunchpad/epilog'},

  { Title: 'Restaurant Review Database Project',
    Description: 'A database application that supports adding, modifying, and removing restaurants and menu items, as well as inserting reviews of specific restaurants and menu items by users.',
    Technologies: 'TypeScript, React Native, Firebase, NodeJS',
    Link: 'https://github.com/TonyLiu0226/Relational-Databases-Project'},
]
const Projects = () => {
    return(
        <div>
        <h1 className={styles.title}>Projects</h1>
      <div className=" mx-0.5 grid grid-justify-items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-2"> 
        {ProjectList.map((project, index) => (
          <ProjectCard Title={project.Title} Description={project.Description} Technologies={project.Technologies} Link={project.Link} key={index}></ProjectCard>
        ))}
    </div>
    </div>
    )
}

export default Projects