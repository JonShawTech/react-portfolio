import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient"
import MySkills from "./scenes/MySkills"
import Projects from "./scenes/Projects"
import Footer from "./scenes/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState('about');
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if  (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);


  }, []);
  return (
    <div className="app bg-deep-blue">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage ={selectedPage}
      setSelectedPage={setSelectedPage}
      
      />
      <div className="w-5/6 mx-auto md:h-full">

      <Landing setSelectedPage={setSelectedPage}/>

      </div>

      <LineGradient/>

        <div className="w-5/6 mx-auto">
          <MySkills/>
        </div>

        
      <LineGradient/>

      <div className="w-5/6 mx-auto">
        <Projects/>
      </div>

      <div>

      <Footer/>
      </div>
      


    </div>
  );
}

export default App;
