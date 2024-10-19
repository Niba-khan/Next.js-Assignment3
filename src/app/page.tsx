import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./about/page";
import Projects from "./project/page";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div style={{backgroundImage:"url(/images/background.gif)", backgroundSize:"cover"}}>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}