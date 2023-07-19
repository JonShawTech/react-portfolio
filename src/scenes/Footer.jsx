import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {

    return (

   
        <footer className="h-64 pt-10 bg-blue">
            <div className="w-5/6 mx-auto"> 
            <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center">
                <p className="font-playfair font-semibold text-2xl text-yellow ">
                    JON SHAW
                    
                </p>

                <p className="font-playfair font-semibold text-md text-yellow ">
                    ©2023 JONSHAWTECH
                </p>

                </div>



            </div>

        </footer>

   


    );

};

export default Footer;