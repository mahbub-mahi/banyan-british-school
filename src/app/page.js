import MapSection from "./../sections/Map.jsx";
import Footer from "./../components/Footer.jsx";
import Navbar from "./../components/NavBar.jsx";
import About from "./../sections/About";
import Contact from "./../sections/Contact";
import Faculty from "./../sections/Faculty";
import Gallery from "./../sections/Gallery";
import Hero from "./../sections/Hero";
import Programs from "./../sections/Programs";
import NoticeBoard from "./../sections/NoticeBoard.jsx";
import AdmissionPopup from "./../components/AdmissionPopUp.jsx";
import TopNoticeBar from "./../components/TopNoticeBar.jsx";
import Leadership from "./../sections/Leadership.jsx";

export default function Home() {
  return (
    <main>
      <TopNoticeBar />
      <AdmissionPopup />
      <Navbar />
      <Hero />
      <About />
      <NoticeBoard />
      <Programs />
      <Leadership />
      <Faculty />
      <Gallery />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  );
}
