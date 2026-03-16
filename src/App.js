import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import Blog from "./views/Blog";
import BlogPage from "./views/BlogPage";
import BlogPost from "./views/BlogPost";
import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

function MainSite() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Services /> */}
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>
        {!loading ? (
          <Routes>
            <Route path="/" element={<MainSite />} />
            <Route path="/blog" element={<><Navbar /><BlogPage /></>} />
            <Route path="/blog/:slug" element={<><Navbar /><BlogPost /></>} />
          </Routes>
        ) : (
          <LoadingScreen />
        )}
      </>
    </ThemeProvider>
  );
}

export default App;