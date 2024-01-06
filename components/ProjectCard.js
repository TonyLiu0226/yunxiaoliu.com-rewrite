import { Card } from 'flowbite-react';
import Marquee from "react-fast-marquee";

const colors = ['text-gray-900 dark:text-gray-400', 'text-emerald-800 dark:text-amber-300', 'text-blue-700 dark:text-red-500', 'text-fuchsia-800 dark:text-violet-400']

const ProjectCard = ({Title, Description, Technologies, Link, Color}) => {
  return (
    <Card href={Link} className="!max-w-screen-xl !min-w-72 !w-full transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:dark:bg-emerald-800 hover:bg-amber-300 duration-300">
        <div className="flex h-full flex-col">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {Title}
            </h5>
            <p className="flex-grow font-normal text-gray-700 dark:text-gray-400">
                {Description}
            </p>
            <Marquee className={colors[Color]} pauseOnHover={true} direction={'right'}>{Technologies}</Marquee>
        </div>
    </Card>
  );
}

export default ProjectCard