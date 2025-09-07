import styles from '../styles/Index.module.css'
import CourseCard from '../components/CourseCard'

const CourseList = [
  {
    Title: 'CPSC 416',
    ImagePath: 'CPSC_416.png',
    Description: 'Distributed Systems'
  },
  {
    Title: 'CPSC 320',
    ImagePath: 'CPSC_320.png',
    Description: 'Data Structures and Algorithms II'
  },
  {
    Title: 'CPEN 355',
    ImagePath: 'CPEN_355.png',
    Description: 'Machine learning with engineering applications',
  },
  {
    Title: 'ELEC 331',
    ImagePath: 'ELEC_331.png',
    Description: 'Computer networking and communications',
  },
  {
    Title: 'CPEN 322',
    ImagePath: 'CPEN_322.png',
    Description: "Software Construction and Web Development"
  },
  {
    Title: 'CPSC 304',
    ImagePath: 'CPSC_304.png',
    Description: 'Introduction to relational databases',
  },
  {
    Title: 'CPSC 330',
    ImagePath: 'CPSC_330.png',
    Description: 'Applied machine learning',
  },
  {
    Title: 'CPEN 331',
    ImagePath: 'CPEN_331.png',
    Description: 'Operating systems',
  },
  {
    Title: 'CPSC 221',
    ImagePath: 'CPSC_221.png',
    Description: 'Data structures and algorithms I',
  },
  {
    Title: 'CPEN 291',
    ImagePath: 'CPEN_291.png',
    Description: 'Project-based design studio for computer engineering students',
  },
  {
    Title: 'CPEN 221',
    ImagePath: 'CPEN_221.png',
    Description: 'Introductory software engineering and Object-Oriented programming',
  },
  {
    Title: 'CPEN 212',
    ImagePath: 'CPEN_212.png',
    Description: 'Computer architecture',
  }
]

const Courses = () => {
    return(
      <div>
      <h1 className='mb-12 mt-6 text-center text-4xl md:text-5xl xl:text-6xl text-gray-900 dark:text-white'>Favourite Courses</h1>
    <div className=" mx-0.5 grid grid-justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-2"> 
      {CourseList.map((course, index) => (
        <CourseCard Title={course.Title} ImagePath={course.ImagePath} Description={course.Description} key={index}></CourseCard>
      ))}
  </div>
  </div>
    )
}

export default Courses