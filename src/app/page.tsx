import Navigation from "./components/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Works from "./components/sections/Works";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col max-h-svh max-w-svw relative">
      <Navigation />
      <main className="flex flex-col items-center justify-center h-full w-full mt-15">
        <Hero />
        <About />
        <Skills />
        <Works />
      </main>
      <Footer />
    </div>
  );
}
