


const SocialMediaIcons = () => {

    return ( 
    <div className="flex justify-center md:justify-start my-10 gap-7">

       
        <a className="hover:text-yellow transition duration-500"      
           href="https://github.com/JonShawTech?tab=repositories"
           target="_blank"
              
            >
                 <i class="fab fa-github fa-2x "></i>
         
          </a>

          <a className="hover:text-yellow transition duration-500"    
             href="https://www.linkedin.com/in/jon-shaw-853b12179/"
             target="_blank"
              
            >
                 <i class="fab fa-linkedin fa-2x"></i>
         
          </a>

          <a className="hover:text-yellow transition duration-500"    
             href="mailto:jonshawtech@gmail.com"
             target="_blank"
              
            >
                <i class="fas fa-envelope fa-2x"></i>
         
          </a>
        


    </div>
    )
}

export default SocialMediaIcons