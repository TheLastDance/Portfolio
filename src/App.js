import './App.scss';
import Navbar from './components/navbar';
import SocialLinks from './components/socialLinks';
import About from './components/about';
import Burger from './components/burger';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Burger />
      <SocialLinks />
      <About />
      <Skills />
    </div>
  );
}

export default App;
