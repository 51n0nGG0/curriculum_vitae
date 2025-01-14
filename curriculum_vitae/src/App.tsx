import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './components/layout.component';
import AboutMe from './pages/about-me.page';
import Curriculum from './pages/curriculum.page';
import Projects from './pages/projects.page';
import Contact from './pages/contact.page';
import NoPage from './pages/no-page.page';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<AboutMe />} />
            <Route path="curriculum" element={<Curriculum />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
