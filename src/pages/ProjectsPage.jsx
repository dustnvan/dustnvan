import { motion } from 'motion/react';
import Project from '../components/Project';
import usaNails from '../assets/images/usa-nails.png';
import microsoftClone from '../assets/images/microsoft-clone.png';
import spaceXClone from '../assets/images/spaceX-clone.png';
import portfolio from '../assets/images/portfolio.png';

const ProjectsPage = () => {
  const projects = [
    {
      name: 'My Portfolio',
      description: 'This webpage',
      link: '',
      techStack: ['React', 'Tailwind'],
      image: portfolio,
    },
    {
      name: 'USA Nails',
      description: 'Appointment scheduler for beauty salon',
      link: 'https://usa-nails.vercel.app/',
      techStack: ['Mongodb', 'Express', 'React', 'Nodejs', 'Tailwind'],
      image: usaNails,
    },
    {
      name: 'Microsoft Clone',
      description: 'Microsoft landing page',
      link: 'https://dustnvan.github.io/microsoft-clone/',
      techStack: ['React'],
      image: microsoftClone,
    },
    {
      name: 'SpaceX Clone',
      description: 'SpaceX landing page',
      link: 'https://dustnvan.github.io/spaceX-clone/',
      techStack: ['HTML', 'CSS', 'Javascript'],
      image: spaceXClone,
    },
  ];

  return (
    // make h-screen when add new section
    <section className="pt-10 xl:h-screen">
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-uranian-blue text-5xl  relative inline-block z-10">
          <span className="z-10 relative font-bold">Projects</span>
          <span className="absolute w-45 h-5 bg-melon -right-10 bottom-0 z-0 opacity-35"></span>
        </h1>
      </motion.div>

      <div className="flex gap-5 overflow-x-auto overflow-y-hidden flex-nowrap scrollbar-thin scrollbar-thumb-uranian-blue scrollbar-track-black pb-5">
        {projects.map((project, index) => (
          <Project
            key={index}
            number={index + 1}
            name={project.name}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};
export default ProjectsPage;
