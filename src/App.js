import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import LabExplorer from './Components/LabExplorer/LabExplorer';
import Projects from './Pages/Projects';
import Games from './Pages/Games';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import './App.css';

export default function App() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><Navbar /><main id="main-content" tabIndex={-1}><Home /><LabExplorer /><Projects /><Games /><AboutMe /><Contact /></main><Footer /></>;
}
