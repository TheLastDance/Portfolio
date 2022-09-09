import './App.scss';
import Navbar from './components/navbar';
import SocialLinks from './components/socialLinks';
import About from './components/about';
import Burger from './components/burger';
import Skills from './components/skills';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Burger />
      <SocialLinks />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
