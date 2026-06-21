import React, { useState, useEffect } from "react";
import { BackgroundGlow } from "./components/BackgroundGlow";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { Projects } from "./components/Projects";
import { CodingMetrics } from "./components/CodingMetrics";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CLIConsole } from "./components/CLIConsole";

const App = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Keyboard shortcut listener to toggle console via the Backtick (`) key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "`") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Visual lighting foundations */}
      <BackgroundGlow />

      {/* Floating navigation panel */}
      <Navbar onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Main website structure layout */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setIsTerminalOpen(true)} />
        <About />
        <Skills />
        <Timeline />
        <Projects />
        <CodingMetrics />
        <Contact />
      </main>

      {/* Footer component */}
      <Footer />

      {/* Interactive Developer CLI console overlay */}
      <CLIConsole
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
    </div>
  );
};

export default App;
