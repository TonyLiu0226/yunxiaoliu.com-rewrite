import { Card } from 'flowbite-react';

const CourseCard = ({Title, ImagePath, Description}) => {
  return (
    <Card
      className="!w-64 justify-self-center transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:dark:bg-blue-700 hover:bg-red-400 duration-300"
      imgAlt="[]"
      imgSrc={ImagePath}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {Title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-200">
        {Description}
      </p>
    </Card>
  );
}

export default CourseCard