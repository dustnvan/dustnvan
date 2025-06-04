import TechStack from '../components/TechStack';
import { motion } from 'motion/react';

const HomePage = () => {
  return (
    <section className="h-screen pt-10 xl:pt-50">
      <div className="flex justify-center gap-10 xl:gap-0 xl:justify-between items-center xl:flex-row flex-col">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'ease', duration: 1 }}
        >
          <h1 className="text-uranian-blue text-5xl  lg:text-7xl font-bold mb-1 x:mb-3">
            Dustin Van
          </h1>
          <h1 className="text-air-blue text-3xl lg:text-5xl lg:text-6xl font-bold mb-3 xl:mb-8">
            Full Stack Developer
          </h1>
          <p className="text-air-blue max-w-lg text-lg ">
            Shaping the web with thoughtful design and precise engineering. I
            focus on accessibility and impact in every project I create.
          </p>
          <button className="relative overflow-hidden p-3 border border-melon text-melon font-semibold group cursor-pointer rounded-lg mt-4 xl:mt-12">
            <a
              href="mailto:dustinvans7@gmail.com"
              className="relative z-10 transition-all duration-300 group-hover:text-white"
            >
              Get In Touch
            </a>
            <span className="absolute left-0 top-0 h-full w-0 bg-melon transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </button>
        </motion.div>
        <div className="">
          <TechStack />
        </div>
      </div>
    </section>
  );
};
export default HomePage;
