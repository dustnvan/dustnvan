import { motion } from 'motion/react';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({
  name,
  description,
  link,
  number,
  techStack,
  image,
  scrollRef,
}) => {
  return (
    <a href={link} target="_blank">
      <motion.div
        className="cursor-pointer rounded-xl p-2 hover:bg-air-blue/20 transition duration-300 group flex flex-col w-80 h-110"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ root: scrollRef }}
        transition={{ duration: 1 }}
      >
        <img src={image} />
        <h1 className="text-2xl font-semibold text-melon mt-4">
          {String(number).padStart(2, '0')} {name}
        </h1>
        <h2 className="text-lg text-air-blue my-2">{description}</h2>
        <p className="text-air-blue my-2">
          Built with: {techStack.join(' · ')}
        </p>

        <div className=" flex justify-center text-air-blue opacity-0  group-hover:opacity-100 transition-all duration-1000  my-3 flex-1">
          <div className="relative flex justify-center items-center ">
            <div className="w-15 h-15 left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-melon scale-0  group-hover:scale-100 duration-1000 rounded-full absolute opacity-20 transition"></div>
            <span className="relative z-10">live website</span>
            <div className="justify-center items-center">
              <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};
export default Project;
