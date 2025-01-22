import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { useState } from "react";

const Layout = () => {

  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      <header className="flex flex-row items-center z-20 gap-x-12">
        <div className="flex flex-row flex-1 justify-start items-center ml-12 gap-x-5 max-xl:flex-col max-xl:items-start">
          <p className="text-2xl font-bold font-poppins m-header max-xl:m-headertop ">Eloy Alfredo Schmidt Rodríguez</p>
          <span className="text-xl font-montserrat m-header max-xl:hidden">/</span>
          <p className="uppercase text-xl font-montserrat m-header max-xl:m-headerbottom">Software Engineer</p>
        </div>
        <div onClick={()=>setBurgerOpen(!burgerOpen)} className={"transition ease-out transform flex flex-col justify-evenly w-[50px] h-[50px] max-xl:mr-12 lg:hidden " + (burgerOpen ? "-rotate-45" : "")}>
          <div className={"transition ease-out transform bg-red-700 h-[5px] w-1/2 rounded-full " + (burgerOpen ? "-rotate-90 translate-x-[12.5px] bg-black" : "")}></div>
          <div className={"bg-red-700 h-[5px] rounded-full " + (burgerOpen ? "bg-black" : "")}></div>
          <div className={"transition ease-out transform bg-red-700 h-[5px] w-1/2 rounded-full self-end " + (burgerOpen ? "-rotate-90 translate-x-[-12.5px] bg-black" : "")}></div>
        </div>
        <nav className="flex flex-row gap-x-10 justify-end  mr-12 max-lg:hidden">
          <Link to="/" className="text-sm uppercase font-montserrat">ABOUT ME</Link>
          <Link to="/curriculum" className="text-sm uppercase font-montserrat">Curriculum</Link>
          <Link to="/projects" className="text-sm uppercase font-montserrat">Projects</Link>
          <Link to="/contact" className="text-sm uppercase font-montserrat">Contact</Link>
        </nav>
      </header>
      <main className="flex relative min-h-main">
        <Outlet />
      </main>
      <footer className="flex flex-row z-20 mx-12 justify-between max-lg:flex-col-reverse max-lg:justify-start max-sm:mx-5 max-lg:mb-[30px]">
        <div className="flex flex-row items-center">
          <p className="font-montserrat text-[14px]">© 2024 Created by Eloy</p>
        </div>
        <div className="flex flex-row flex-wrap justify-between lg:gap-x-20 gap-x-5 gap-y-5 my-[30px] max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className="shrink-0 flex flex-col gap-y-2 items-center max-lg:items-start">
            <p className="font-semibold font-montserrat text-[14px]">Call</p>
            <p>+34-686-44-18-33</p>
          </div>
          <div className="shrink-0 flex flex-col gap-y-2 items-center max-lg:items-start max-md:row-start-2">
            <p className="font-semibold font-montserrat text-[14px]">Write</p>
            <p>eloyschmidtrodriguez+work@gmail.com</p>
          </div>
          <div className="shrink-0 flex flex-col gap-y-2 items-center max-lg:items-start">
            <p className="font-semibold font-montserrat text-[14px]">Follow</p>
            <div className="flex flex-row gap-x-4">
              <a>
                <FontAwesomeIcon icon={faInstagram}/>
              </a>
              <a>
                <FontAwesomeIcon icon={faLinkedinIn}/>
              </a>
              <a>
                <FontAwesomeIcon icon={faGithub}/>
              </a>
            </div>
          </div>
        </div>
      </footer>      
    </>
  )
};

export default Layout;