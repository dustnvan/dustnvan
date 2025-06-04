import Github from '../assets/images/github.svg?react';
import LinkedIn from '../assets/images/linkedin.svg?react';
import { motion } from 'motion/react';
const Media = () => {
  return (
    <>
      <motion.div
        className="hidden xl:block fixed left-10 bottom-0"
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'ease', duration: 1 }}
      >
        <ul className="flex flex-col gap-10">
          <li className="text-air-blue hover:text-melon cursor-pointer transition-colors duration-300">
            <a href="https://github.com/dustnvan" target="_blank">
              <Github width={30} height={30} />
            </a>
          </li>
          <li className="text-air-blue hover:text-melon cursor-pointer transition-colors duration-300">
            <a href="https://www.linkedin.com/in/dustinnvan/" target="_blank">
              <LinkedIn width={30} height={30} />
            </a>
          </li>
          <div className="flex justify-center">
            <div className="bg-air-blue h-30 w-1 text-center"></div>
          </div>
        </ul>
      </motion.div>

      <div className="block xl:hidden my-20 w-full">
        <ul className="flex justify-center gap-10">
          <li className="text-air-blue hover:text-melon cursor-pointer transition-colors duration-300">
            <a href="https://github.com/dustnvan" target="_blank">
              <Github width={30} height={30} />
            </a>
          </li>
          <li className="text-air-blue hover:text-melon cursor-pointer transition-colors duration-300">
            <a href="https://www.linkedin.com/in/dustinnvan/" target="_blank">
              <LinkedIn width={30} height={30} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Media;
