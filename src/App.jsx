import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./components/TechStack.jsx";
import Projects from "./components/Projects.jsx";
import Certificates from "./components/Certificates.jsx";
import Internship from "./components/Internship.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Certificates />
        <Internship />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
