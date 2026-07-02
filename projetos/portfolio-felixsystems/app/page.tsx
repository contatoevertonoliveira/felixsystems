import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Values from './components/Values';
import Differentials from './components/Differentials';
import About from './components/About';
import Process from './components/Process';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DataFlow from './components/DataFlow';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Efeito de dados em movimento */}
      <DataFlow />

      <Header />
      <main>
        <Hero />
        <Services />
        <Values />
        <Differentials />
        <Process />
        <About />
        <Cases />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
