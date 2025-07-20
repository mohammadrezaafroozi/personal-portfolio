import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Projects from "./Projects";




export default function Home() {
  return <main className="flex min-h-screen flex-col">
   <Navbar/>
   <Hero/>
   <About/>
   <Projects/>
   <Contact/>
  </main>;
}
