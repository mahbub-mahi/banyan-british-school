import Footer from "./../components/Footer.jsx";
import Navbar from "./../components/NavBar.jsx";
import About from "./../sections/About";
import Contact from "./../sections/Contact";
import Faculty from "./../sections/Faculty";
import Gallery from "./../sections/Gallery";
import Hero from "./../sections/Hero";
import Programs from "./../sections/Programs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Faculty />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
