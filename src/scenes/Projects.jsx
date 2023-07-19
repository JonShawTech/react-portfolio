import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";



const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};



const Project = ({ title, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  const imageLink = "https://github.com/JonShawTech/evaluateBiasInAI/blob/main/mitigateBiasAIF360.ipynb"


  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
          {description}
        </p>


      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle}/>

      



    </motion.div>
  );
};



const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            PRO<span className="text-red">JECTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          {/* Hover over a project for a descirption or select for demo! */}
          

        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
      

        
        <a href="https://github.com/JonShawTech/evaluateBiasInAI/blob/main/mitigateBiasAIF360.ipynb" target="_blank"><img src="../assets/project-1.jpg" alt="biasAI" className="hover:opacity-50 transition duration-500"/></a>
        <a href="https://jonshawtech.github.io/Coffee_Shop_Finder/" target="_blank"><img src="./assets/csf.jpg" alt="csf" className="hover:opacity-50 transition duration-500" /></a>
        <a href="https://jonshawtech.github.io/PathfindingVisualizer/" target="_blank"><img src="./assets/pathfinding2.JPG" alt="pathvis" className="hover:opacity-50 transition duration-500" /></a>        
        <a href="https://jonshawtech.github.io/astrogram//" target="_blank"><img src="./assets/astrogram.jpg" alt="astro"  className="hover:opacity-50 transition duration-500"/></a>



        </motion.div>
      </div>
    </section>
  );
};

export default Projects;