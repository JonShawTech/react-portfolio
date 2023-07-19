import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import {motion } from "framer-motion";


const MySkills = () => {
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");


    return (
        <section id="skills" className="pt-10 pb-24">

             {/* header and image section */}

             <div className="md:flex md:justify-between md:gap-16 mt:32">

                <motion.div 
                className="md:w-1/3"
                initial="hidden"
                whileInView={"visible"}
                viewport={{ once: true, amount: 0.5 }}
                transition={{duration: 0.5}}
                variants={{
                    hidden: {opacity: 0, x: -50 },
                    visible : {opacity: 1, x:0 }
                }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">

                        MY <span className="text-red">SKILLS  </span>
                    </p>
                    <LineGradient width="1/3"/>
                    <p className="mt-10 mb-7">


                        <div className="grid grid-cols-3 grid-flow-col gap-8">

                        <div className="">
                                <span className="text-red text-2xl font-semibold mb-3"> Tech <br></br> Stack </span>
                              
                                <ul>
                                    <li> MongoDB</li>
                                    <li> Express.js</li>
                                    <li> React.js</li>
                                    <li> Node.js</li>
                            
                                </ul>
                            </div>

                            
                            <div className="">
                                <span className="text-red text-2xl font-semibold mb-3"> Tools and Technologies</span>
                                <ul>
                                    <li> JavaScript</li>
                                    <li> Python</li>
                                    <li> CSS</li>
                                    <li> HTML</li>
                                    <li> GIT</li>
                                </ul>
                            </div>

                            <div className="">
                                <span className="text-red text-2xl font-semibold mb-3"> SDLC Methodologies</span>
                                <ul>
                                    <li> Agile / Scrum</li>
                                    <li> Dev Ops</li>          
                            
                                </ul>

                            </div>
    
            
                        </div>        
    

                    </p>


                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? ( 
                        <div 
                            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                            
                        >  
                            <img 
                                className="z-10"
                                alt="skills" 
                                src="/assets/coding.jpg"
                            /> 
                        </div>
                            
                        ) : (
                            <img 
                            className="z-10"
                            alt="skills" 
                            src="/assets/coding.jpg"
                        /> 
                        )}

                </div>


             </div>
             
             {/* SKILLS */}
                        



        </section>
    )
}

export default MySkills;