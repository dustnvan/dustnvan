import htmlIcon from '../assets/images/html-5.svg';
import cssIcon from '../assets/images/css-3.svg';
import jsIcon from '../assets/images/javascript.svg';
import reactIcon from '../assets/images/react.svg';
import nodejsIcon from '../assets/images/nodejs.svg';
import expressIcon from '../assets/images/express.svg';
import gitIcon from '../assets/images/git.svg';
import tailwindIcon from '../assets/images/tailwindcss.svg';
import mongodb from '../assets/images/mongodb.svg';
import TechIcon from './TechIcon';
import { motion } from 'motion/react';
const TechStack = () => {
  const techStack = [
    { name: 'HTML', img: htmlIcon, delay: 0 },
    { name: 'CSS', img: cssIcon, delay: 0.1 },
    { name: 'Javascript', img: jsIcon, delay: 0.3 },
    { name: 'React', img: reactIcon, delay: 0.8 },
    { name: 'NodeJS', img: nodejsIcon, delay: 0.9 },
    { name: 'Express', img: expressIcon, delay: 0.4 },
    { name: 'Git', img: gitIcon, delay: 0.7 },
    { name: 'Tailwind', img: tailwindIcon, delay: 0.6 },
    { name: 'Mongodb', img: mongodb, delay: 0.5 },
  ];

  return (
    <div className="grid grid-cols-3 gap-5">
      {techStack.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 + tech.delay }} // optional staggered effect
        >
          <TechIcon techName={tech.name} img={tech.img} />
        </motion.div>
      ))}
    </div>
  );
};
export default TechStack;
