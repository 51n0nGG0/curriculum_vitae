import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav className="flex flex-row justify-between">
          <Link to="/" className="font-console">SOBRE MI</Link>
          <Link to="/curriculum" className="font-console">CURRICULUM</Link>
          <Link to="/projects" className="font-console">PROJECTS</Link>
          <Link to="/contact" className="font-console">CONTACT</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>      
    </>
  )
};

export default Layout;