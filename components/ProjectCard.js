import { Card } from 'flowbite-react';
import Marquee from "react-fast-marquee";

const colors = ['text-orange-800 dark:text-teal-200', 'text-emerald-800 dark:text-amber-300', 'text-blue-700 dark:text-red-500', 'text-fuchsia-800 dark:text-violet-400']

const ProjectCard = ({Title, Description, Technologies, Link, Color}) => {
  return (
    <Card href={Link} className="!z-10 !max-w-screen-md !min-w-72 justify-self-center !w-full transition ease-in-out hover:-translate-y-1 hover:scale-95 hover:dark:bg-emerald-800 hover:bg-amber-300 duration-300 border-2 border-black border-solid">
        <div className="flex h-full flex-col">
            <h5 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {Title}
            </h5>
            <br></br>
            <p className="flex-grow font-normal text-gray-700 dark:text-gray-400 text-sm md:text-base xl:text-lg">
                {Description}
            </p>
            <Marquee className={colors[Color]} pauseOnHover={true} direction={'right'}>{Technologies}</Marquee>
        </div>
    </Card>
  );
}

export default ProjectCard