import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

const Layout = () => {
  return (
    <>
      <header className="flex flex-row z-20">
        <div className="flex flex-row flex-1 justify-start ml-12 gap-x-5">
          <p className="text-2xl font-bold font-poppins m-header">Eloy Alfredo Schmidt Rodríguez</p>
          <span className="text-xl font-montserrat m-header">/</span>
          <p className="uppercase text-xl font-montserrat m-header">Software Engineer</p>
        </div>
        <nav className="flex flex-row gap-x-10 justify-end flex-1 m-header mr-12">
          <Link to="/" className="text-sm uppercase font-montserrat">ABOUT ME</Link>
          <Link to="/curriculum" className="text-sm uppercase font-montserrat">Curriculum</Link>
          <Link to="/projects" className="text-sm uppercase font-montserrat">Projects</Link>
          <Link to="/contact" className="text-sm uppercase font-montserrat">Contact</Link>
        </nav>
      </header>
      <main className="flex relative min-h-main">
        <Outlet />
      </main>
      <footer className="grid grid-cols-[3fr_4fr] z-20 ml-12">
        <div className="flex flex-row justify-center items-center justify-self-start">
          <p className="font-montserrat text-[14px]">© 2024 Created by Eloy</p>
        </div>
        <div className="flex flex-row gap-x-20 mt-[30px] mb-[30px] justify-self-end mr-12">
          <div className="flex flex-col gap-y-2 items-center">
            <p className="font-semibold font-montserrat text-[14px]">Call</p>
            <p>+34-686-44-18-33</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
            <p className="font-semibold font-montserrat text-[14px]">Write</p>
            <p>eloyschmidtrodriguez+work@gmail.com</p>
          </div>
          <div className="flex flex-col gap-y-2 items-center">
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