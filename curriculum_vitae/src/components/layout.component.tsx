import { Outlet, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { useBurgerMenu } from "../hooks/useBurgerMenu.hook";

//REFACTORIZAR NAV BAR COMPONENT
const Layout = () => {

  const location = useLocation();

  const {burgerOpen, setBurgerOpen} = useBurgerMenu();

  return (
    <>
      <header className="flex flex-row items-center z-30 gap-x-12 px-12 max-md:px-5 max-md:gap-x-5 bg-white">
        <div className="flex flex-row flex-1 justify-start items-center gap-x-5 max-xl:flex-col max-xl:items-start">
          <div className="flex flex-row justify-start items-center gap-x-5 m-header max-xl:m-headertop max-md:gap-x-3">
            <div className="bg-red-700 w-[20px] h-[20px] min-w-[20px] min-h-[20px]"></div>
            <p className="text-2xl font-bold font-poppins max-sm:text-xl"><span className="text-nowrap">Eloy Alfredo</span> <span className="text-nowrap">Schmidt Rodríguez</span></p>
          </div>
          <span className="text-xl font-montserrat m-header max-xl:hidden">/</span>
          <p className="uppercase text-xl font-montserrat m-header max-xl:m-headerbottom max-sm:text-lg">Software Engineer</p>
        </div>
        <div onClick={()=>setBurgerOpen(!burgerOpen)} className={"transition ease-out transform flex flex-col justify-evenly w-[50px] h-[50px] max-sm:h-[40px] max-sm:w-[40px] lg:hidden z-40 " + (burgerOpen ? "-rotate-45" : "")}>
          <div className={"transition ease-out transform origin-right h-[5px] w-1/2 rounded-full " + (burgerOpen ? "-rotate-90 bg-black translate-y-[-10.6px] max-sm:translate-y-[-7.95px]" : "bg-red-700")}></div>
          <div className={"h-[5px] rounded-full " + (burgerOpen ? "bg-black translate-y-[-0.5px]" : "bg-red-700")}></div>
          <div className={"transition ease-out transform origin-left h-[5px] w-1/2 rounded-full self-end " + (burgerOpen ? "-rotate-90 bg-black translate-y-[10.6px] max-sm:translate-y-[7.95px]" : "bg-red-700")}></div>
        </div>
        <nav className={"flex flex-row gap-x-10 justify-end max-lg:flex-col max-lg:w-screen max-lg:h-screen max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:bg-[#e6cece] max-lg:justify-center max-lg:items-center max-lg:gap-y-8 " + (!burgerOpen ? "max-lg:hidden" : "")}>
          <Link to="/" className={"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold " + (location.pathname === '/' ? "text-red-700" : "")} onClick={()=>setBurgerOpen(false)}>About me</Link>
          <Link to="/curriculum" className={"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold " + (location.pathname === '/curriculum' ? "text-red-700" : "")} onClick={()=>setBurgerOpen(false)}>Curriculum</Link>
          <Link to="/projects" className={"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold " + (location.pathname === '/projects' ? "text-red-700" : "")} onClick={()=>setBurgerOpen(false)}>Projects</Link>
          <Link to="/contact" className={"text-sm uppercase font-montserrat max-lg:text-xl max-lg:font-bold " + (location.pathname === '/contact' ? "text-red-700" : "")} onClick={()=>setBurgerOpen(false)}>Contact</Link>
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