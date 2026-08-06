import { useState } from "react";
import Background from "./components/Background";
import "./components/Background.css";
import Dust from "./components/Dust";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollFade from "./components/ScrollFade";
import ScrollSpy from "./components/ScrollSpy";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [heroRevealed, setHeroRevealed] = useState(false);

  return (
    <>
      {loading && (
        <Loader onDone={() => setLoading(false)} onLeaving={() => setHeroRevealed(true)} />
      )}
      <Background />
      <Dust />
      <ScrollSpy />
      <NavBar />
      <main>
        <ScrollFade>
          <Hero revealed={heroRevealed} />
        </ScrollFade>
        <ScrollFade>
          <About />
        </ScrollFade>
        <ScrollFade>
          <Skills />
        </ScrollFade>
        <ScrollFade>
          <Experience />
        </ScrollFade>
        <ScrollFade>
          <Work />
        </ScrollFade>
        <ScrollFade>
          <Contact />
        </ScrollFade>
      </main>
      <Footer />
    </>
  );
}

export default App;
