
import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({setSelectedPage}) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="about"
         className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
         
         >

        { /* IMAGE SECTION */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {isAboveMediumScreens ? (

                <div 
                    className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                    before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                    before:border-2 before:border-blue before:z-[-1]"
                    
                >  
                <img 
                    className="z-10 w-full max-d-[400px] md:max-w-[600px] rounded-t-[400px]"
                    alt="profile" 
                    src="/assets/image003.jpg"
                /> 
                </div>
                ) : (
            
                
                <img 
                    className="z-10 max-d-[400px] md:max-w-[600px] rounded-t-[400px]"
                    alt="profile" 
                    src="/assets/image003.jpg" />          
           
                
                )}
                </div>

                { /* MAIN TEXT */}

                <div className="z-10 basis-2/5 mt-12 md:mt-32">
                { /* HEADINGS framer motion */}
                <motion.div 
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50 },
                        visible : {opacity: 1, x:0 }
                    }}
                    >

                <p className="text-6xl font-playfair z-10 text-center md:text-start">
                Jon {""}
                <span className="text-red">
                Shaw
                </span>
                {/* <span
                    className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                    before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
                    >
                
                    </span> */}
                        </p>
       
                        <p className="mt-10 mb-7 text-md text-center md:text-start">
                        Hi, I'm Jon. Welcome to my portfolio! <br/> <br/>I have over 10 years of experience working in various IT roles across multiple disciplines.
                         I'm passionate about technology, and I especially enjoy building things with code.
                         Please check out some of my coding projects below.

                        </p>

                        <div className="">
                                <span className="text-red text-2xl font-semibold mb-3"> Georgia Institute of Technology</span>
                                <ul>
                                    <li> Master of Science in Computer Science</li>
                                    <li>Aug 2020 - Dec 2022</li>
                                </ul>

                                <span className="text-red text-2xl font-semibold mb-3"> Kennesaw State University</span>
                                <ul>
                                    <li> Bachelor of applied Science in Information Technology</li>
                                    <li>Aug 2014 - 2019</li>
                                </ul>
                        </div>
               
   
                </motion.div>


          





   
                {/* CALL TO ACTIONS */}
                

                <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
  
       
          <SocialMediaIcons />   

                </motion.div>


                </div>
              
                

          


        </section>
    )



    
}

export default Landing;