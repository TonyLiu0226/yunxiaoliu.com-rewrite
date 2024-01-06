import { Card } from 'flowbite-react';

const ProjectCard = ({Title, Description, Technologies, Link}) => {
  return (
    <Card href={Link} className="!max-w-screen-xl !min-w-80 !w-full transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:dark:bg-emerald-800 hover:bg-amber-300 duration-300">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {Title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {Description}
      </p>
      <p>Technologies: {Technologies}</p>
    </Card>
  );
}

export default ProjectCard