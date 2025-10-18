import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Video from './Components/Video';
import Contact from './Components/Contact';
import ScrollTotop from './Components/ScrollTotop';

function App() {
 
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Project />
      <Video />
      <Contact />
      <Footer />
      <ScrollTotop />
    </div>
  )
}

export default App
