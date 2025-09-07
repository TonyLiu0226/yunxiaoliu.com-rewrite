import styles from '../styles/Index.module.css'
import ProjectCard from '../components/ProjectCard'

const ProjectList = [
  {
    Title: "FlowLeaflets",
    Description: "Developed in collaboration with a nonprofit, Flowleaflets is a SaaS that allows medical students to transcribe and digitize handwritten notes from medical logbooks.",
    Technologies: ", NodeJS, React, Supabase, Python, Flask, Llama, transformers",
    Link: "https://github.com/ubclaunchpad/clinical-logging"
  },
  {
    Title: "Class of \'19",
    Description: "A visual novel about the experiences of two high school friends as they navigate the complexities of high school life.",
    Technologies: ", Python, RenPy, OpenAI, Suno",
    Link: "https://github.com/TonyLiu0226/Class_of_19"
  },
  {
    Title: "Celeste.png",
    Description: "An app that leverages open-source LLMs hosted locally to generate short stories based on user-controlled prompts and togglable parameters.",
    Technologies: ", NextJS, TypeScript, TailwindCSS, Python, transformers, Ollama",
    Link: "https://github.com/TonyLiu0226/celeste.png"
  },
  { Title: 'MoodSense',
    Description: 'An AI-enhanced journaling app that performs sentiment analysis on journal entries and comments about your experiences.',
    Technologies: ', Python, scikit-learn, Pandas, NumPy, TypeScript, NextJS, Firebase',
    Link: 'https://github.com/TonyLiu0226/next-entries-client/tree/master'},

  { Title: 'Dexbooru',
    Description: 'A modernized anime image board for users to share content through posts. Users can like and comment on posts, and can also chat with each other live.',
    Technologies: ', TypeScript, Sveltekit, Redis, PostgreSQL, TailwindCSS, S3, CloudFront',
    Link: 'https://github.com/t-shah02/dexbooru-rewrite'},

  { Title: 'Epilog',
    Description: 'A seizure tracker app for iOS and Android. Users can log daily seizure activity, record seizures via the camera, and keep track of important events and medications on a built-in calendar.',
    Technologies: ', TypeScript, React Native, Firebase, NodeJS',
    Link: 'https://github.com/ubclaunchpad/epilog'},

  { Title: 'Restaurant Review Database Project',
    Description: 'A database application that supports adding, modifying, and removing restaurants and menu items, as well as inserting reviews of specific restaurants and menu items by users.',
    Technologies: ', JavaScript, HTML, CSS, OracleDB, SQL',
    Link: 'https://github.com/TonyLiu0226/Relational-Databases-Project'},

  {
    Title: 'Shopinder',
    Description: 'An app that allows you to make shopping lists ahead of time and set email or text reminders to notify you when its time to shop!',
    Technologies: ', Svelte, NodeJS, HTML, CSS, Twilio',
    Link: 'https://devpost.com/software/shopinder'
  },
  {
    Title: 'Unimeetups',
    Description: 'A meetup app for university students to plan events and make friends with others who are geographically close and share common interests.',
    Technologies: ', Python, Flask, HTML, CSS, MongoDB',
    Link: 'https://devpost.com/software/unimeetups'
  },
  {
    Title: 'Tahsin Hasan\'s CPEN 212 Note Transcriber',
    Description: 'A note transcription device including an automated page-flipping mechanism powered by an ItsyBitsy M4 microcontroller and servo motors. Programmed the device to autonomously operate a connected android camera to take photos of notes and run a machine learning algorithm to transcribe handwritten text. Additionally, implemented a React-based web app to control device functions.',
    Technologies: ', Python, Flask, CircuitPython, HTML, CSS, React',
    Link: 'https://github.com/TonyLiu0226/note_transcriber'
  },
]
const Projects = () => {
    return(
        <div>
        <h1 className='mb-12 mt-6 text-center text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-white'>Projects</h1>
      <div className=" mx-0.5 grid grid-justify-items-center lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-2"> 
        {ProjectList.map((project, index) => (
          <ProjectCard Title={project.Title} Description={project.Description} Technologies={project.Technologies} Link={project.Link} Color={Math.floor(Math.random() * 4)}key={index}></ProjectCard>
        ))}
    </div>
    </div>
    )
}

export default Projects