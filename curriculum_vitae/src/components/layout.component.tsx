import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header className="flex flex-row">
        <div className="flex flex-row flex-1 justify-start ml-10 gap-x-5">
          <p className="text-2xl font-bold font-poppins m-header">Eloy Alfredo Schmidt Rodríguez</p>
          <span className="text-xl font-montserrat m-header">/</span>
          <p className="uppercase text-xl font-montserrat m-header">Software Engineer</p>
        </div>
        <nav className="flex flex-row gap-x-10 justify-end flex-1 m-header mr-10">
          <Link to="/" className="text-sm uppercase font-montserrat">ABOUT ME</Link>
          <Link to="/curriculum" className="text-sm uppercase font-montserrat">Curriculum</Link>
          <Link to="/projects" className="text-sm uppercase font-montserrat">Projects</Link>
          <Link to="/contact" className="text-sm uppercase font-montserrat">Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        FOOTER
      </footer>      
    </>
  )
};

export default Layout;